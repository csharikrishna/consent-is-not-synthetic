const path = require('path');
const fs = require('fs');
const { chromium } = require(path.resolve(__dirname, '../web/node_modules/playwright'));

const BASE_URL = 'http://127.0.0.1:3000';
const ROUTES = [
  '/', '/impact/', '/evidence/', '/incidents/', '/technology/',
  '/model-governance/', '/regulation/', '/accountability/', '/research/',
  '/library/', '/sources/', '/transparency/', '/methodology/', '/about/',
  '/corrections/', '/take-action/', '/action/', '/models/', '/press/', '/support/'
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const findings = [];

  for (const vp of [
    { name: 'desktop_1440', width: 1440, height: 900 },
    { name: 'mobile_390', width: 390, height: 844 }
  ]) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    for (const route of ROUTES) {
      const errors = [];
      page.removeAllListeners('pageerror');
      page.on('pageerror', e => errors.push(e.message));

      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      const metrics = await page.evaluate(() => {
        const overflow = document.documentElement.scrollWidth > window.innerWidth;
        const h1Count = document.querySelectorAll('h1').length;
        const imgsNoAlt = Array.from(document.querySelectorAll('img')).filter(i => !i.hasAttribute('alt')).length;
        const tablesUnwrapped = Array.from(document.querySelectorAll('table')).filter(t => !t.closest('.table-scroll')).length;
        const smallTouchTargets = Array.from(document.querySelectorAll('a.button, button.menu-toggle, .nav-action')).filter(el => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && r.height > 0 && r.height < 40;
        }).length;
        const brokenLinks = Array.from(document.querySelectorAll('a[href^="/downloads/"], a[href^="/assets/"]')).map(a => a.getAttribute('href'));
        return { overflow, h1Count, imgsNoAlt, tablesUnwrapped, smallTouchTargets, brokenLinks };
      });

      findings.push({ viewport: vp.name, route, errors, ...metrics });
    }
    await context.close();
  }

  await browser.close();

  let issues = 0;
  for (const f of findings) {
    const bad = f.overflow || f.h1Count !== 1 || f.imgsNoAlt > 0 || f.tablesUnwrapped > 0 || f.errors.length > 0;
    if (bad) {
      issues++;
      console.log('ISSUE:', f.viewport, f.route, JSON.stringify(f));
    }
  }
  console.log(`UI/UX Audit complete: ${findings.length} route-viewport checks, ${issues} structural issues found.`);
})();
