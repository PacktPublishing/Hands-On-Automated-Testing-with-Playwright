import { test, expect } from '@playwright/test';
import config from '../config.json';

test('successful login with standard user', async ({ page }) => {
  await page.goto(config.baseUrl);
  await page.getByPlaceholder('Username').fill(config.users.standard.username);
  await page.getByPlaceholder('Password').fill(config.users.standard.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();
});
