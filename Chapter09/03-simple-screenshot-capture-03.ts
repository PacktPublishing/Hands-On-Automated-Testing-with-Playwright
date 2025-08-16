import { test, expect } from '@playwright/test';

test('take a simple screenshot of header', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Take a screenshot of just the header element
  const element = page.locator('header');
  await element.screenshot({ 
    path: 'test-results/element-screenshot.png' 
  });
});
