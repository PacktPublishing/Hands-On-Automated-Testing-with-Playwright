import { test as base } from '@playwright/test';

export const test = base.extend({
  login: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');
    const login = async (username, password) => {
      await page.getByPlaceholder('Username').fill(username);
      await page.getByPlaceholder('Password').fill(password);
      await page.getByRole('button', { name: 'Login' }).click();
    };
    await use(login);
  },
});
