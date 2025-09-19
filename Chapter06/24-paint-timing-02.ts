import { test, expect } from '@playwright/test';

test('measure LCP on google.com', async ({ page }) => {
  // Inject the LCP observer *before* navigation
  await page.addInitScript(() => {
    let lcp;
    new PerformanceObserver((entries) => {
      entries.getEntries().forEach((e) => {
        lcp = e.startTime;
      });
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    window.__lcp = () => lcp;
  });

  await page.goto('https://www.google.com', { waitUntil: 'load' });

  // Wait a bit to let paints complete
  await page.waitForTimeout(3000);

  // Read the LCP value
  const lcpValue = await page.evaluate(() => window.__lcp());
  console.log('Largest Contentful Paint:', lcpValue);
});
