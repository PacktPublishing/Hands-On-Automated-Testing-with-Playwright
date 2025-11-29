import { chromium, Browser, BrowserContext, Page } from 'playwright';

(async () => {
  const browserHeadful: Browser = await chromium.launch({
    headless: false,       
    devtools: true,  
    slowMo: 50, 
  });

  const context: BrowserContext = await browserHeadful.newContext();
  const page: Page = await context.newPage();
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'example.png' });

  await browserHeadful.close();
})();
