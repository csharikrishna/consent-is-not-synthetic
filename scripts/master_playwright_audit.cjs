const path = require('path');
const fs = require('fs');
const { chromium } = require(path.resolve(__dirname, '../web/node_modules/playwright'));

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3000';
const AUDIT_DIR = path.resolve(__dirname, '../audit-results');
const SHOTS_DIR = path.join(AUDIT_DIR, 'screenshots');
fs.mkdirSync(SHOTS_DIR, { recursive: true });

const axeSourcePath = path.resolve(__dirname, '../web/node_modules/axe-core/axe.min.js');
if (!fs.existsSync(axeSourcePath)) {
  throw new Error(`axe-core is unavailable at ${axeSourcePath}; accessibility audit cannot run.`);
}
const axeSource = fs.readFileSync(axeSourcePath, 'utf8');

const VIEWPORTS = [
  { name: 'mobile_360', width: 360, height: 640 },
  { name: 'mobile_390', width: 390, height: 844 },
  { name: 'tablet_768', width: 768, height: 1024 },
  { name: 'tablet_1024', width: 1024, height: 768 },
  { name: 'desktop_1440', width: 1440, height: 900 },
  { name: 'desktop_1920', width: 1920, height: 1080 }
];

const ROUTES = [
  '/', '/impact/', '/evidence/', '/incidents/', '/technology/',
  '/model-governance/', '/open-weights/', '/regulation/', '/accountability/', '/research/',
  '/library/', '/sources/', '/transparency/', '/methodology/', '/about/',
  '/corrections/', '/take-action/', '/action/', '/models/', '/press/', '/support/'
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const routeResults = [];
  const responsiveResults = [];
  const a11yResults = [];
  const perfResults = [];
  const functionalMatrix = {};
  const axeSummary = { totalViolations: 0, byRoute: {}, interactiveStates: {} };

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    for (const route of ROUTES) {
      const consoleErrors = [];
      const pageErrors = [];
      const failedRequests = [];

      page.removeAllListeners('console');
      page.removeAllListeners('pageerror');
      page.removeAllListeners('response');

      page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
      page.on('pageerror', err => pageErrors.push(err.message));
      page.on('response', res => {
        if (res.status() >= 400 && res.url().startsWith(BASE_URL)) {
          failedRequests.push({ url: res.url(), status: res.status() });
        }
      });

      const resp = await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 25000 });
      const status = resp ? resp.status() : 0;

      const dom = await page.evaluate(() => {
        const nav = performance.getEntriesByType('navigation')[0];
        return {
          title: document.title,
          h1Count: document.querySelectorAll('h1').length,
          h1Text: document.querySelector('h1')?.textContent?.trim() || '',
          hasHeader: !!document.querySelector('header.site-header'),
          hasMain: !!document.querySelector('main#main'),
          hasFooter: !!document.querySelector('footer'),
          hasSkipLink: !!document.querySelector('a.skip[href="#main"]'),
          overflow: document.documentElement.scrollWidth > window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
          imgsNoAlt: Array.from(document.querySelectorAll('img')).filter(i => !i.hasAttribute('alt')).length,
          tablesUnwrapped: Array.from(document.querySelectorAll('table')).filter(t => !t.closest('.table-scroll')).length,
          dclMs: nav ? Math.round(nav.domContentLoadedEventEnd) : null,
          loadMs: nav ? Math.round(nav.loadEventEnd) : null,
        };
      });

      // Run axe on desktop 1440 and mobile 390
      let axeViolations = [];
      if (vp.name === 'desktop_1440' || vp.name === 'mobile_390') {
        await page.evaluate(axeSource);
        const axeRes = await page.evaluate(async () => {
          return await axe.run(document, {
            runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }
          });
        });
        axeViolations = axeRes.violations.map(v => ({
          id: v.id,
          impact: v.impact,
          help: v.help,
          nodes: v.nodes.length
        }));
        if (axeViolations.length > 0) {
          const key = `${vp.name}:${route}`;
          axeSummary.byRoute[key] = axeViolations;
          axeSummary.totalViolations += axeViolations.length;
        }
      }

      const pass = status === 200 && dom.title.length > 0 && dom.h1Count === 1 && !dom.overflow && dom.imgsNoAlt === 0 && dom.tablesUnwrapped === 0 && consoleErrors.length === 0 && pageErrors.length === 0 && failedRequests.length === 0;

      routeResults.push({ viewport: vp.name, route, status, pass, consoleErrors, pageErrors, failedRequests, title: dom.title });
      responsiveResults.push({ viewport: vp.name, route, overflow: dom.overflow, scrollWidth: dom.scrollWidth, innerWidth: dom.innerWidth, tablesUnwrapped: dom.tablesUnwrapped });
      a11yResults.push({
        viewport: vp.name,
        route,
        h1Count: dom.h1Count,
        hasHeader: dom.hasHeader,
        hasMain: dom.hasMain,
        hasFooter: dom.hasFooter,
        hasSkipLink: dom.hasSkipLink,
        imgsNoAlt: dom.imgsNoAlt,
        axeViolations: (vp.name === 'desktop_1440' || vp.name === 'mobile_390') ? axeViolations : undefined
      });

      if (vp.name === 'desktop_1440') {
        perfResults.push({ route, dclMs: dom.dclMs, loadMs: dom.loadMs });
      }

      if ((vp.name === 'desktop_1440' || vp.name === 'mobile_390') && ['/', '/evidence/', '/models/', '/research/', '/press/', '/transparency/', '/support/'].includes(route)) {
        const fname = `${route.replace(/\//g, '') || 'home'}_${vp.name}.png`;
        await page.screenshot({ path: path.join(SHOTS_DIR, fname), fullPage: false });
      }
    }
    await context.close();
  }

  // Functional Interaction & Keyboard Matrix on Desktop 1440
  const fCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const fPage = await fCtx.newPage();

  // 1. Skip link + Tab key navigation test
  await fPage.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await fPage.keyboard.press('Tab');
  const focusedTag = await fPage.evaluate(() => document.activeElement ? document.activeElement.tagName.toLowerCase() : null);
  const focusedHref = await fPage.evaluate(() => document.activeElement ? document.activeElement.getAttribute('href') : null);
  functionalMatrix.keyboardNav = { firstTabTag: focusedTag, skipLinkFocused: focusedHref === '#main' };

  // 2. Citation modal + mutually exclusive header dropdowns on /
  await fPage.locator('[data-dropdown-btn]', { hasText: 'Research' }).click();
  await fPage.locator('[data-dropdown-btn]', { hasText: 'Act' }).hover();
  const openDropdownsAfterHover = await fPage.locator('[data-dropdown].open').count();
  await fPage.keyboard.press('Escape');
  const openDropdownsAfterEscape = await fPage.locator('[data-dropdown].open').count();
  functionalMatrix.headerDropdowns = { openAfterHover: openDropdownsAfterHover, openAfterEscape: openDropdownsAfterEscape };

  await fPage.locator('[data-citation]').first().click();
  const modalVisible = await fPage.locator('#citation-inspector-modal').isVisible();
  const modalTitle = await fPage.locator('#citation-modal-title').textContent();

  // Axe on open citation modal
  await fPage.evaluate(axeSource);
  const modalAxe = await fPage.evaluate(async () => {
    return await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } });
  });
  if (modalAxe.violations.length > 0) {
    axeSummary.interactiveStates['citationModal'] = modalAxe.violations.map(v => ({ id: v.id, nodes: v.nodes.length }));
    axeSummary.totalViolations += modalAxe.violations.length;
  }

  await fPage.keyboard.press('Escape');
  const modalClosed = !(await fPage.locator('#citation-inspector-modal').isVisible());
  functionalMatrix.citationModal = { opened: modalVisible, title: modalTitle, closedOnEscape: modalClosed, axeViolations: modalAxe.violations.length };

  // 3. Chart tabs & Metric filter on /evidence/
  await fPage.goto(`${BASE_URL}/evidence/`, { waitUntil: 'networkidle' });
  const tab2 = fPage.locator('[data-chart-tab]').nth(1);
  await tab2.click();
  const tab2Pressed = await tab2.getAttribute('aria-pressed');
  const searchInput = fPage.locator('[data-filter-root] [data-search]').first();
  await searchInput.fill('Ofcom');
  const countText = await fPage.locator('[data-filter-root] [data-count]').first().textContent();
  functionalMatrix.evidenceTabsAndFilter = { tab2Pressed, filteredCountText: countText?.trim() };

  // 4. ModelAccessGate + Top50SnapshotExplorer on /models/
  await fPage.goto(`${BASE_URL}/models/`, { waitUntil: 'networkidle' });
  const gateBtn = fPage.locator('button', { hasText: /Acknowledge|Proceed|Enter/i }).first();
  const gateVisible = await gateBtn.isVisible();
  if (gateVisible) await gateBtn.click();
  const top50Rows = await fPage.locator('[aria-label*="Top 50"] tbody tr').count();
  const top50Search = fPage.locator('[aria-label*="Top 50"]').locator('..').locator('..').locator('[data-search]');
  await top50Search.fill('Apache-2.0');
  const visibleTop50 = await fPage.locator('[aria-label*="Top 50"] tbody tr:not([hidden])').count();

  // Wait for any fadeIn animations to finish
  await fPage.waitForTimeout(400);

  // Axe on acknowledged models explorer
  await fPage.evaluate(axeSource);
  const modelsAxe = await fPage.evaluate(async () => {
    return await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } });
  });
  if (modelsAxe.violations.length > 0) {
    axeSummary.interactiveStates['modelsExplorer'] = modelsAxe.violations.map(v => ({
      id: v.id,
      nodes: v.nodes.map(n => ({ target: n.target, html: n.html, failure: n.failureSummary }))
    }));
    axeSummary.totalViolations += modelsAxe.violations.length;
  }
  functionalMatrix.modelsGateAndTop50 = { gateVisible, totalRows: top50Rows, filteredApacheRows: visibleTop50, axeViolations: modelsAxe.violations.length };

  // 5. Mobile drawer on 390x844
  const mCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mPage = await mCtx.newPage();
  await mPage.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  const menuBtn = mPage.locator('[data-menu]');
  const menuBox = await menuBtn.boundingBox();
  await menuBtn.click();
  const navOpen = await mPage.locator('#main-nav.open').count();

  // Axe on open mobile drawer
  await mPage.evaluate(axeSource);
  const drawerAxe = await mPage.evaluate(async () => {
    return await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } });
  });
  if (drawerAxe.violations.length > 0) {
    axeSummary.interactiveStates['mobileDrawer'] = drawerAxe.violations.map(v => ({ id: v.id, nodes: v.nodes.length }));
    axeSummary.totalViolations += drawerAxe.violations.length;
  }
  functionalMatrix.mobileDrawer = { menuHeightPx: menuBox ? Math.round(menuBox.height) : 0, opened: navOpen === 1, axeViolations: drawerAxe.violations.length };

  await browser.close();

  const total = routeResults.length;
  const passed = routeResults.filter(r => r.pass).length;
  fs.writeFileSync(path.join(AUDIT_DIR, 'route-audit.json'), JSON.stringify(routeResults, null, 2));
  fs.writeFileSync(path.join(AUDIT_DIR, 'responsive-audit.json'), JSON.stringify(responsiveResults, null, 2));
  fs.writeFileSync(path.join(AUDIT_DIR, 'accessibility-audit.json'), JSON.stringify({ axeSummary, a11yResults }, null, 2));
  fs.writeFileSync(path.join(AUDIT_DIR, 'performance-audit.json'), JSON.stringify(perfResults, null, 2));
  fs.writeFileSync(path.join(AUDIT_DIR, 'playwright-results.json'), JSON.stringify({ total, passed, axeSummary, functionalMatrix }, null, 2));

  console.log(`Playwright Audit: ${passed}/${total} route-viewport checks passed.`);
  console.log(`Axe Accessibility Audit: ${axeSummary.totalViolations} rule violations (desktop, mobile, and interactive states).`);
  console.log('Functional Matrix:', JSON.stringify(functionalMatrix));

  if (
    passed !== total ||
    axeSummary.totalViolations > 0 ||
    functionalMatrix.headerDropdowns.openAfterHover !== 1 ||
    functionalMatrix.headerDropdowns.openAfterEscape !== 0 ||
    !functionalMatrix.citationModal.opened ||
    !functionalMatrix.citationModal.closedOnEscape ||
    functionalMatrix.modelsGateAndTop50.totalRows !== 50 ||
    !functionalMatrix.mobileDrawer.opened ||
    !functionalMatrix.keyboardNav.skipLinkFocused
  ) {
    console.error('Playwright / Axe Audit FAILED!');
    process.exit(1);
  }
})();
