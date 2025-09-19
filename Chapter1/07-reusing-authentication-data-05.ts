import { test, expect } from '@playwright/test';

test.use({ storageState: 'standard_user_auth.json' });

test('should access inventory as standard_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();
});
