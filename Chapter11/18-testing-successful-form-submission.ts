import { test, expect } from '@playwright/test';

test('valid form submission redirects to confirmation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Fill the form with valid credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click the login button
  await page.click('#login-button');

  // Verify redirection to confirmation page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
