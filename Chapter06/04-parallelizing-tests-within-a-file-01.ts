import { test, expect } from '@playwright/test';

test.describe.parallel('Parallel test suite', () => {
  
  test('Test 1 - Google.com has correct title', async ({ page }) => {
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
  });

  test('Test 2 - Playwright.dev has correct title', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('Test 3 - GitHub has correct title', async ({ page }) => {
    await page.goto('https://github.com');
    await expect(page).toHaveTitle(/GitHub/);
  });

});
