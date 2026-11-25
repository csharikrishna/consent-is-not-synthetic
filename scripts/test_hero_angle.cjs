const path = require('path');
const { chromium } = require(path.resolve('./web/node_modules/playwright'));
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000/');
  await page.addStyleTag({
    content: `
      .hero {
        background: linear-gradient(76deg, #fffdfc 0%, #fffdfc calc(50% + 20px), #fbf0f3 calc(50% + 20px), #f8e5ec 100%) !important;
        border-bottom: 1px solid var(--line) !important;
        overflow: hidden !important;
      }
      .hero-grid {
        display: grid !important;
        grid-template-columns: 1.15fr 0.85fr !important;
        align-items: center !important;
        min-height: 480px !important;
        gap: 36px !important;
        padding-block: 40px !important;
      }
      .hero-art {
        position: relative !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
      }
      .hero-art img {
        display: block !important;
        width: 100% !important;
        max-height: 410px !important;
        object-fit: contain !important;
        filter: drop-shadow(0 14px 32px rgba(162, 33, 73, 0.08)) !important;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .art-caption {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        width: 100% !important;
        max-width: 556px !important;
        margin-top: 14px !important;
        padding: 8px 12px !important;
        font-size: 10.5px !important;
        font-weight: 800 !important;
        letter-spacing: 0.16em !important;
        color: var(--accent) !important;
        border-top: none !important;
      }
      .art-caption .dot {
        display: inline-block !important;
        width: 6px !important;
        height: 6px !important;
        border-radius: 50% !important;
        background: var(--accent) !important;
        margin-right: 6px !important;
        vertical-align: middle !important;
      }
    `
  });
  await page.waitForTimeout(500);
  const outDir = 'C:/Users/cshar/.gemini/antigravity/brain/30a31876-3ed3-4324-bea8-1b732eb968fa';
  const shotPath = path.join(outDir, 'hero_test_76deg.png');
  await page.screenshot({ path: shotPath, clip: { x: 0, y: 0, width: 1920, height: 820 } });
  console.log('Saved test screenshot to:', shotPath);
  await browser.close();
})();
