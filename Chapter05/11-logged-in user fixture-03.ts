// tests/dashboard.spec.ts
import { test, expect } from '../fixtures/login.fixture';

test('login test', async ({ loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
