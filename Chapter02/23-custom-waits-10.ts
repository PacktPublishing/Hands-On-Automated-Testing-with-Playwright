import { test, expect } from '@playwright/test';

test('Change article language to Deutsch, async ({ page }) => {
  // Go to Wikipedia page
  await page.goto('https://en.wikipedia.org/wiki/Playwright_(software)');

  // Click the change language
  await page.getByRole('button', { name: 'Go to an article in another' }).click();

  // Click the Deutsch language link
  await page.getByRole('link', { name: 'Deutsch' }).click();

  // Wait for the Deutsch Wikipedia URL
  await page.waitForURL('https://de.wikipedia.org/wiki/Playwright_(Software)', { timeout: 5000 });

  // Assert that the URL is as expected
  expect(page.url()).toContain('de.wikipedia.org');

  console.log('Successfully navigated to German Wikipedia.');
});
