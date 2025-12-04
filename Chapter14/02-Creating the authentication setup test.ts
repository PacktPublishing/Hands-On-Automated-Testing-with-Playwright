// tests/auth.setup.ts
import { test as setup, expect } from '@playwright/test';

setup('authenticate as standard_user', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://www.saucedemo.com/');

  // Log in with valid credentials
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Save the storage state to a file
  await page.context().storageState({ path: '.auth/standard_user.json' });
});
