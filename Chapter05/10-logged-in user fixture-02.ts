// fixtures/login.fixture.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
