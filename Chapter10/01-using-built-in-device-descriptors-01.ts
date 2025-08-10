import { test, expect, devices } from '@playwright/test';

test.describe('Responsive layout on mobile', () => {
  test('should display the mobile navigation menu on iPhone 13 Pro', async ({ browser }) => {

    const iPhone15 = devices['iPhone 15'];

    // Create a new browser context with iPhone 15 settings
    const context = await browser.newContext({
      ...iPhone15,
    });
    const page = await context.newPage();

    await page.goto('https://github.com');

    const mobileMenuButton = page.getByRole('button', { name: 'Toggle navigation' });
    await expect(mobileMenuButton).toBeVisible();

    // Clean up the context
    await context.close();
  });
});
