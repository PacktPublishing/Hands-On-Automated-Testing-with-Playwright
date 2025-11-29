import { test, expect } from '@playwright/test';

test('should log in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // --- CORRECTED LINE ---
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.fill('#password', 'secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page).toHaveTitle('Swag Labs');
});

