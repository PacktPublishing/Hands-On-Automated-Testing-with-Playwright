import { test, expect, devices } from '@playwright/test';

test.describe('Responsive layout on mobile', () => {
  test('should display the mobile navigation menu on iPhone 13 Pro', async ({ browser }) => {

    const context = await browser.newContext({
      ...devices['iPhone 15'],
    });
    const page = await context.newPage();
    await page.goto('https://github.com');
    const mobileMenuButton = page.getByRole('button', { name: 'Toggle navigation' });

    // Pause execution here to inspect the page state
    await page.pause();

    await expect(mobileMenuButton).toBeVisible();

    // Clean up the context
    await context.close();
  });
});

