import { test } from '@playwright/test';

test('Custom mobile emulation test', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1',
  });

  const page = await context.newPage();
  await page.goto('https://www.whatsmybrowser.org');
  await page.screenshot({ path: 'custom-mobile-emulation.png' });

  await context.close(); // closes all pages as well
});

