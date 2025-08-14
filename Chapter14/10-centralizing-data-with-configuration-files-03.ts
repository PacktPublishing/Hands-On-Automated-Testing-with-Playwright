// test-setup.ts
import { expect, test as baseTest } from '@playwright/test';
import config from '../config.json';

// Define a new type for our custom fixtures.
// This allows for better autocompletion and type safety.
type MyFixtures = {
  loggedInPage: any;
};

// Extend the base test with our custom fixture.
export const test = baseTest.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    // This is the setup code for the fixture.
    await page.goto(config.baseUrl);
    await page.getByPlaceholder('Username')
      .fill(config.users.standard.username);
    await page.getByPlaceholder('Password')
      .fill(config.users.standard.password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Use the fixture. This is where the test code runs.
    await use(page);

    // This is the teardown code for the fixture (if any).
    // In this case, there is no specific cleanup needed.
  },
});
