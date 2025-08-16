import { test, expect } from '@playwright/test';

test('take a simple screenshot for debugging', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Take a screenshot and save it as 'playwright_homepage.png'
  await page.screenshot({ 
    path: 'test-results/playwright_homepage.png' 
  });
});
