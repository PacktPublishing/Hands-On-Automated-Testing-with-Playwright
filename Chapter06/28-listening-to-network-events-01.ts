import { test, expect } from '@playwright/test';

test('Capture network request details', async ({ page }) => {
  // Store network request data
  const networkRequests = [];

  // Listen for requestfinished event
  page.on('requestfinished', async (request) => {
    const response = await request.response();
    const timing = request.timing();
    
    networkRequests.push({
      url: request.url(),
      method: request.method(),
      resourceType: request.resourceType(),
      status: response?.status(),
      responseSize: (await response?.body())?.length || 0,
      duration: timing.responseEnd - timing.requestStart,
      startTime: timing.startTime
    });
  });

  // Navigate to the test page
  await page.goto('https://playwright.dev/');

  // Wait for page to load completely
  await page.waitForLoadState('networkidle');

  // Log collected network requests
  console.log('Network Requests:', networkRequests);

  // Basic assertion to verify page loaded
  await expect(page).toHaveTitle(/Playwright/);

  // Example assertions for network requests
  expect(networkRequests.length).toBeGreaterThan(0);
  expect(networkRequests.some(req => req.status === 200)).toBe(true);
});
