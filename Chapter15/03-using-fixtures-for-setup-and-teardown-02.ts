import { test, expect } from './loginFixture';
import { expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test('should allow valid user to log in', async ({ login, page }) => {
    await login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('should show error for invalid credentials', async ({ login, page }) => {
    await login('locked_out_user', 'secret_sauce');
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
  });
});
