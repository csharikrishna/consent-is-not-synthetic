const path = require('path');
const { chromium } = require(path.resolve('./web/node_modules/playwright'));
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const outDir = 'C:/Users/cshar/.gemini/antigravity/brain/30a31876-3ed3-4324-bea8-1b732eb968fa';

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1000);

  // 1. Homepage Section 2 (IWF Chart)
  const severitySec = await page.locator('#severity');
  if (await severitySec.count() > 0) {
    await severitySec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, 'chart_iwf_home.png') });
    console.log('Captured chart_iwf_home.png');
  }

  // 2. Homepage Section 5 (Supply Chain Pipeline)
  const accountSec = await page.locator('#accountability');
  if (await accountSec.count() > 0) {
    await accountSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, 'infographic_pipeline_home.png') });
    console.log('Captured infographic_pipeline_home.png');
  }

  // 3. Evidence page
  await page.goto('http://localhost:3000/evidence/');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, 'charts_evidence_page.png') });
  console.log('Captured charts_evidence_page.png');

  // 4. Models page (acknowledge gate)
  await page.goto('http://localhost:3000/models/');
  await page.waitForTimeout(1000);
  const gateBtn = page.locator('button:has-text("Proceed")');
  if (await gateBtn.count() > 0) {
    await gateBtn.click();
    await page.waitForTimeout(1000);
  }
  const archSec = page.locator('#architectures');
  if (await archSec.count() > 0) {
    await archSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, 'chart_models_arch.png') });
    console.log('Captured chart_models_arch.png');
  }

  // 5. Accountability page
  await page.goto('http://localhost:3000/accountability/');
  await page.waitForTimeout(1000);
  const pyramidEl = page.locator('.pyramid-card');
  if (await pyramidEl.count() > 0) {
    await pyramidEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, 'infographic_pyramid.png') });
    console.log('Captured infographic_pyramid.png');
  }

  await browser.close();
})();
