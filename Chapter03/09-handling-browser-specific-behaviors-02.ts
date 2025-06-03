import { test, expect } from '@playwright/test';

test('demonstrating device-specific logic', async ({ page, browserName, isMobile }) => {
  await page.goto('https://github.com/');

  console.log(`Currently running on: ${browserName}, Is mobile: ${isMobile}`);

  if (isMobile) {
    // Mobile-specific behavior: Click hamburger menu to reveal SignIn link
    await page.getByRole('button', { name: 'Toggle navigation' }).click();
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
  } else if (browserName === 'firefox') {
    // Firefox might render a specific element differently
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
  } else {
    // Default behavior for other browsers
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
  }
});
