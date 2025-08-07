import { test, expect } from '@playwright/test';

test('my custom screenshot test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  try {
    // Assert something that might fail
    await expect(page.locator('#undefined!')).toBeVisible();
  } catch (error) {
    // If the assertion fails, take a custom screenshot
    await page.screenshot({ path: 'shot.png', fullPage: true });
    console.error('Test failed, custom screenshot taken!');

    // Re-throw the error to ensure the test is marked as failed
    throw error; 
  }
});
