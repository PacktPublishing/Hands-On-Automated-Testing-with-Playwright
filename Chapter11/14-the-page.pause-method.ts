import { test, expect, devices } from '@playwright/test';

test('Google autocomplete shows suggestions', async ({ browser }) => {
  const iPhone15PM = devices['iPhone 15 Pro Max'];

  const context = await browser.newContext({
    ... iPhone15PM ,
  });
  const page = await context.newPage();
    
  await page.goto('https://www.google.com');

  // Type a query into the search box
  const searchBox = await page.getByRole('textbox');
  await searchBox.fill('playwright');

  // Pause execution here to inspect the page state
  await page.pause();

  const suggestions = page.locator('ul[role="listbox"] li');
  await expect(suggestions.first()).toBeVisible();

  // Check that at least one suggestion contains "playwright"
  const suggestionTexts = await suggestions.allTextContents();
  expect(suggestionTexts.some(text => text.toLowerCase().includes('playwright'))).toBeTruthy();
  
  // Clean up the context
  await context.close();
});
