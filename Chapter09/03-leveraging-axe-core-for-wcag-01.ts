import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Check for WCAG 2.1 A and AA compliance', async ({ page }) => {
  await page.goto('https://amazon.com');

  // Run axe-core accessibility scan
  const results = await new AxeBuilder({ page })
    .withTags(['wcag21a', 'wcag21aa'])
    .analyze();

  // Log violations for debugging
  if (results.violations.length > 0) {
    console.log('Accessibility violations:', results.violations);
  }

  // Assert no violations
  expect(results.violations).toEqual([]);
});
