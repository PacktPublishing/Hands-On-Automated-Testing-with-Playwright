import { test } from '@playwright/test';

test('Measure paint timings', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const paintMetrics = await page.evaluate(() => {
    const paintEntries = performance.getEntriesByType('paint');
    return paintEntries.map(e => ({
      name: e.name,
      startTime: e.startTime,
    }));
  });

  console.log('Paint timings:', paintMetrics);

});
