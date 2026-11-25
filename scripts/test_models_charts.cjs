const path = require('path');
const { chromium } = require(path.resolve('./web/node_modules/playwright'));
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const outDir = 'C:/Users/cshar/.gemini/antigravity/brain/30a31876-3ed3-4324-bea8-1b732eb968fa';

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/models/');
  await page.waitForTimeout(1000);

  // Click proceed button on the warning banner
  const btn = page.locator('button');
  const count = await btn.count();
  for (let i = 0; i < count; i++) {
    const text = await btn.nth(i).innerText();
    if (text.includes('Proceed') || text.includes('Acknowledge')) {
      await btn.nth(i).click();
      await page.waitForTimeout(1000);
      break;
    }
  }

  // Scroll to architectures section
  const archSec = page.locator('#architectures');
  if (await archSec.count() > 0) {
    await archSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, 'chart_models_arch.png') });
    console.log('Captured chart_models_arch.png');
  }

  // Scroll to provenance / gaps section
  const provSec = page.locator('#provenance');
  if (await provSec.count() > 0) {
    await provSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, 'chart_models_gaps.png') });
    console.log('Captured chart_models_gaps.png');
  }

  await browser.close();
})();
