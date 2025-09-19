import { test, expect } from '@playwright/test';

test('should search for "Playwright testing"', async ({ page }) => {
  // Navigate to Wikipedia
  await page.goto('https://en.wikipedia.org');

  // Locate the search box 
  const searchBox = page.getByRole('searchbox', { name: /Search Wikipedia/i });

  // Clear the input first if needed
  await searchBox.clear();

  // Type character by character
  await searchBox.type('Playwright testing');

  // Submit the search by pressing Enter
  await searchBox.press('Enter');

  // Verify the page title contains the search term
  await expect(page).toHaveTitle(/.*Playwright testing.*/);

});
