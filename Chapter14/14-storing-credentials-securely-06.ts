import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('login to example.com', async ({ page }) => {
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  // Go to login page
  await page.goto('https://www.saucedemo.com/');

  // Log in with valid credentials
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
