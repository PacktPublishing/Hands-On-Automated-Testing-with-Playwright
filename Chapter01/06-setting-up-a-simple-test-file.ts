import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
  // Navigate to the Playwright homepage
  await page.goto('https://playwright.dev');
  
  // Fetch the title of the page
  const title = await page.title();
  
  // Assert that the title contains 'Playwright'
  expect(title).toContain('Playwright');
});

