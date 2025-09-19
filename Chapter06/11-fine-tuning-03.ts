import { test, expect } from '@playwright/test';

// Fast test
test('quick test', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
});

// Slow test 
test('very slow test', async ({ page }) => {
  test.slow(); // Marking this test as slow

  // Simulate long-running test (1 minute)
  await page.waitForTimeout(60000);
});