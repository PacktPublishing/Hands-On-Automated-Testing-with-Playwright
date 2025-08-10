import { test, expect } from '@playwright/test';

test('Login with invalid credentials shows error message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Fill the form with invalid credentials
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', 'wrong_password');

  // Click the login button
  await page.click('#login-button');

  // Verify the error message appears
  const errorMessage = await page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});
