import { test, expect } from '@playwright/test';

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

test.beforeAll(() => {
  if (!username || !password) {
    throw new Error('ERROR: USERNAME or PASSWORD not defined in environment variables.');
  }
});

test('should successfully log out from Swag Labs', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://www.saucedemo.com/');

  // Log in with valid credentials
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
});
