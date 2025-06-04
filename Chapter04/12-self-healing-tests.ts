import { test, expect } from '@playwright/test';

test('', async ({ page }) => {

  await page.goto('https://google.com');

  const locators = [
    page.getByRole("button", { name: "Google Search" }),
    page.getByTestId('submit-button'),
    page.getByText('Google Search'),
  ];

  for (const locator of locators) {
    try {
      await locator.click({ timeout: 5000 });
      console.log('Success!');
      return;
    } catch {
      console.warn(`Locator failed: ${locator}, trying next...`);
    }
  }
  throw new Error("All locators failed for Submit button");

});
