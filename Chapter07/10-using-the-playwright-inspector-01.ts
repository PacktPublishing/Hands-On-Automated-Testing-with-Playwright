import { test, expect } from '@playwright/test';

test('should log in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // --- PROBLEM LINE ---
  // We're assuming the username field has an ID 'username-input'
  // but it's wrong!
  await page.fill('#username-input', 'standard_user');

  await page.fill('#password', 'secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page).toHaveTitle('Swag Labs');
});
