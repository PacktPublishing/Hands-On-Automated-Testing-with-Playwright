import { test } from '@playwright/test';

test('Collect performance metrics with throttling', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Create a CDP session for this page:
  const session = await context.newCDPSession(page);
  await session.send('Performance.enable');
  await session.send('Network.enable');

  // Optionally throttle network & CPU:
  await session.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 100,               // ms
    downloadThroughput: 75000,  // bytes/sec
    uploadThroughput: 25000,
  });
  await session.send('Emulation.setCPUThrottlingRate', { rate: 4 }); // Simulate 4× slower CPU

  // Navigate and wait for load:
  await page.goto('https://playwright.dev');

  // Retrieve performance metrics:
  const metricsResponse = await session.send('Performance.getMetrics');
  console.log('CDP Performance metrics:', metricsResponse.metrics);

  await context.close();
});
