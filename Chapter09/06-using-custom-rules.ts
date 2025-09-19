import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations on the page', async ({ page }) => {
  await page.goto('https://www.google.com');

  const results = await new AxeBuilder({ page })
    // Only check for these two specific accessibility rules:
    .withRules(['color-contrast', 'image-alt'])
    .analyze();

  // You can also log the violations for more detailed 
  // debugging if needed

  // Assert that there are no violations. 
  expect(results.violations).toEqual([]);
});
