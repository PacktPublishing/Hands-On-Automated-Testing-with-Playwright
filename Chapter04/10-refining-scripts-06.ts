// AI-generated (standalone):
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('url');
  await page.click('button');
  await browser.close();
})();
