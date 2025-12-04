import { test, expect } from '@playwright/test';

test('should successfully log out from Swag Labs', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://www.saucedemo.com/');

  // Log in with valid credentials
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login by checking for inventory page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Save the storage state after successful login
  await page.context().storageState({ path: 'auth.json' });

  // Open the menu and click logout
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByText('Logout').click();

  // Verify redirection to login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

  // Attempt to access a protected route (inventory) to confirm logout
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
