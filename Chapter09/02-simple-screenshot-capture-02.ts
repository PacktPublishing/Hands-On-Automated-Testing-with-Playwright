import { test, expect } from '@playwright/test';

test('take a simple screenshot of header', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Take a screenshot of the entire page
  await page.screenshot({ 
    path: 'test-results/playwright_homepage.png', 
    fullPage: true 
  });
});
