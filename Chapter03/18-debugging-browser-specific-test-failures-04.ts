import { test, expect } from '@playwright/test';

test('Change article language to Deutschtest  ', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Playwright_(software)');
  await page.getByRole('button', { name: 'Go to an article in another' }).click();
  await page.getByRole('link', { name: 'Deutsch' }).click();
  await page.waitForURL('https://de.wikipedia.org/wiki/Playwright_(Software)', { timeout: 5000 });

  // Pauses execution for manual inspection
  await page.pause();

  console.log('Successfully navigated to German Wikipedia.');
});
