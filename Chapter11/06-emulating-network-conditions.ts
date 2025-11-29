import { test, expect } from '@playwright/test';

// Define the network conditions for a slow 3G connection
const slow3G = {
  downloadThroughput: 500 * 1024 / 8, // 500 kbps
  uploadThroughput: 500 * 1024 / 8,   // 500 kbps
  latency: 400, // 400ms
  offline: false,
};

test.describe('Emulate Slow Network Conditions', () => {
  // This test is specifically for Chromium as it uses the CDP session.
  // You can also define a custom project in your config so the tests 
  // run only in Chromium.
  test.skip(
    ({ browserName }) => browserName !== 'chromium',
    'This feature is currently only supported on Chromium.'
  );

  test('should emulate a slow 3G connection', async ({ page }) => {
    const client = await page.context().newCDPSession(page);
    await client.send('Network.emulateNetworkConditions', slow3G);

    console.log('Slow 3G network conditions have been enabled.');

    // Navigate to a website. The loading time will be noticeably
    // longer due to the emulated network conditions.
    const startTime = Date.now();
    await page.goto('https://playwright.dev');
    const loadTime = Date.now() - startTime;

    console.log(`Page loaded in ${loadTime}ms under slow 3G conditions.`);

    // You can now perform your tests as usual.
    // All subsequent network requests on this page will be throttled.
    await expect(page).toHaveTitle(/Playwright/);

    // You can also disable the emulation if needed by setting the 
    // values back to default (or 0 for no throttling).
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 0,
      downloadThroughput: -1, // -1 disables throttling
      uploadThroughput: -1,   // -1 disables throttling
    });

    console.log('Network emulation has been disabled.');
  });
});
