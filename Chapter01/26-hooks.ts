import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory.html/);
});

test('Check inventory page title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Check shopping cart link is visible', async ({ page }) => {
  const cartLink = page.locator('.shopping_cart_link');
  await expect(cartLink).toBeVisible();
});
