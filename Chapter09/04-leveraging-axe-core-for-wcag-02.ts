import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Check for WCAG 2.1 A and AA compliance', async ({ page }) => {
  await page.goto('https://amazon.com');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag21aa'])
    .analyze();

  if (results.violations.length > 0) {
    console.log('Accessibility violations:', results.violations);
  }

  expect(results.violations).toEqual([]);
});
