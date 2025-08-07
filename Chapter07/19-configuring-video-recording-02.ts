import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: 'test-results/my-videos/', 
      size: { width: 1280, height: 720 }, 
    },
  });
  const page = await context.newPage();

  // Your automation steps here
  await page.goto('https://playwright.dev/');
  await page.getByText('Get started');
  // ...

  // Important: Videos are saved upon browser context closure.
  // Make sure to close the context and browser.
  await context.close();
  await browser.close();
})();
