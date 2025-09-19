import { test, expect, devices } from '@playwright/test';

// Use a built-in mobile device
const iPhone15 = devices['iPhone 15'];

test.use({
  ...iPhone15,
  viewport: iPhone15.viewport,
  userAgent: iPhone15.userAgent,
});

test('Wikipedia search field interaction on mobile', async ({ page }) => {
  // Navigate to Wikipedia
  await page.goto('https://www.wikipedia.org/');

  // Tap the search input field
  await page.tap('input[name="search"]');

  // Type something
  await page.fill('input[name="search"]', 'Playwright');

  // Tap the search button
  await page.tap('button[type="submit"]');

  // Assert that a new page loads
  await expect(page).toHaveURL(/.*Playwright.*/);
});
