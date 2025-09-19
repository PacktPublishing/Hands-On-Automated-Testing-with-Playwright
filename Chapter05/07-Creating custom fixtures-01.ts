// fixtures/auth.ts
import { test as base } from '@playwright/test';

export const test = base.extend<{ loggedInPage: Page }>({
  loggedInPage: async ({ page }, use) => {
    // --- Setup: Log the user in ---
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    
    console.log('User logged in!');

    // Provide the logged-in page to the test
    await use(page);

    // --- Teardown ---
    // Example: Log out if needed
    // await page.click('#logout-button');
    console.log('Test finished, loggedInPage fixture torn down.');
  },
});
