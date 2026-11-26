const path = require('path');
const fs = require('fs');
const { chromium } = require(path.resolve(__dirname, '../web/node_modules/playwright'));

const BASE_URL = process.argv[2] || process.env.SITE_URL || 'https://csharikrishna.github.io/consent-is-not-synthetic';
const AUDIT_DIR = path.resolve(__dirname, '../audit-results');
fs.mkdirSync(AUDIT_DIR, { recursive: true });
const REPORT_PATH = path.join(AUDIT_DIR, 'production-smoke-test.json');

const ROUTES = [
  '/', '/impact/', '/evidence/', '/incidents/', '/technology/',
  '/model-governance/', '/open-weights/', '/regulation/', '/accountability/', '/research/',
  '/library/', '/sources/', '/transparency/', '/methodology/', '/about/',
  '/corrections/', '/take-action/', '/action/', '/models/', '/press/', '/support/'
];

const ASSET_ENDPOINTS = [
  '/robots.txt',
  '/sitemap.xml',
  '/assets/hero.svg',
  '/downloads/citation-audit.csv',
  '/downloads/top50-hf-metadata-snapshot.json',
  '/downloads/v4-journal.pdf'
];

(async () => {
  console.log(`Starting Production Smoke Test against ${BASE_URL}...`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const routeResults = [];
  const failures = [];

  for (const r of ROUTES) {
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];

    page.removeAllListeners('pageerror');
    page.removeAllListeners('console');
    page.removeAllListeners('response');

    page.on('pageerror', err => pageErrors.push(err.message));
    page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    page.on('response', res => {
      if (res.status() >= 400 && res.url().startsWith(BASE_URL)) {
        failedRequests.push({ url: res.url(), status: res.status() });
      }
    });

    const targetUrl = BASE_URL.replace(/\/$/, '') + r;
    const resp = await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 30000 });
    const status = resp ? resp.status() : 0;

    const dom = await page.evaluate((base) => {
      const canonicalTag = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
      return {
        title: document.title,
        h1Count: document.querySelectorAll('h1').length,
        canonical: canonicalTag,
        canonicalValid: canonicalTag.startsWith(base),
        bodyLength: document.body.innerText.length
      };
    }, BASE_URL);

    const pass = status === 200 && dom.h1Count === 1 && dom.canonicalValid && consoleErrors.length === 0 && pageErrors.length === 0 && failedRequests.length === 0;

    const item = {
      route: r,
      status,
      pass,
      title: dom.title,
      h1Count: dom.h1Count,
      canonical: dom.canonical,
      consoleErrors,
      pageErrors,
      failedRequests
    };

    routeResults.push(item);
    if (!pass) {
      failures.push({ route: r, item });
    }
  }

  // Key Asset & Download Endpoints
  const assetStatuses = {};
  for (const endpoint of ASSET_ENDPOINTS) {
    const target = BASE_URL.replace(/\/$/, '') + endpoint;
    const resp = await page.request.get(target);
    assetStatuses[endpoint] = {
      status: resp.status(),
      ok: resp.status() === 200
    };
    if (resp.status() !== 200) {
      failures.push({ asset: endpoint, status: resp.status() });
    }
  }

  // Content Assertions
  await page.goto(BASE_URL.replace(/\/$/, '') + '/regulation/', { waitUntil: 'networkidle' });
  const regText = await page.evaluate(() => document.body.innerText);
  const regHasDistinctTriggers = regText.includes('Rule 3(2)(b)') && regText.includes('Rule 3(1)(d)') && !regText.includes('2–3 hrs');

  await page.goto(BASE_URL.replace(/\/$/, '') + '/sources/', { waitUntil: 'networkidle' });
  const srcText = await page.evaluate(() => document.body.innerText);
  const sourcesHas77 = srcText.includes('77');

  await page.goto(BASE_URL.replace(/\/$/, '') + '/models/', { waitUntil: 'networkidle' });
  const modelsText = await page.evaluate(() => document.body.innerText);
  const modelsClean = !modelsText.includes('withheld from public display') && !modelsText.includes('systemic non-compliance across community repositories');

  await browser.close();

  const report = {
    production_url: BASE_URL,
    test_timestamp_utc: new Date().toISOString(),
    total_routes_checked: ROUTES.length,
    routes_passed: routeResults.filter(r => r.pass).length,
    all_routes_passed: failures.length === 0,
    failures,
    route_results: routeResults,
    asset_statuses: assetStatuses,
    content_assertions: {
      regulation_has_distinct_triggers: regHasDistinctTriggers,
      sources_displays_77_count: sourcesHas77,
      models_has_no_overstatement_or_contradiction: modelsClean
    },
    verdict: (failures.length === 0 && regHasDistinctTriggers && sourcesHas77 && modelsClean) ? 'PASS' : 'FAIL'
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), 'utf8');
  console.log(`Smoke test verdict: ${report.verdict}`);
  console.log(`Routes passed: ${report.routes_passed}/${ROUTES.length}`);
  console.log(`Report written to ${REPORT_PATH}`);

  if (report.verdict !== 'PASS') {
    process.exit(1);
  }
})();
