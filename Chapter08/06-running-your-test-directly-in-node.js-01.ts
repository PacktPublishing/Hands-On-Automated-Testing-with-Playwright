import { chromium } from 'playwright';

(async () => {
  // Headless mode
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(' https://playwright.dev/');
  // ... more actions
  await browser.close();
})();
