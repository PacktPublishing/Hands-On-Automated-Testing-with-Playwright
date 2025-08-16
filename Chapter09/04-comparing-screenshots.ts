// In tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('Homepage should look the same', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // This is the magic line!
  await expect(page).toHaveScreenshot('homepage.png');
});
