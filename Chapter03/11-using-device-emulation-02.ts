import { test } from '@playwright/test';

test('Emulate Android device and open github.com', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    userAgent: 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36',
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    geolocation: { latitude: 48.856613, longitude: 2.352222 },
    locale: 'fr-FR',
    timezoneId: 'Europe/Paris',
    permissions: ['geolocation'],
  });

  const page = await context.newPage();
  await page.goto('https://github.com');

  // Add assertions or interactions here

  await context.close();
});
