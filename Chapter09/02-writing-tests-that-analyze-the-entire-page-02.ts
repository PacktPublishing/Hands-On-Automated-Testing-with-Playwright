import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('should pass accessibility scan', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://www.wikipedia.org/');

    // Run axe-core accessibility scan
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'section508']) 
      .analyze();

    // Log violations for debugging
    if (results.violations.length > 0) {
      console.log('Accessibility violations:', results.violations);
    }

    // Assert no violations
    expect(results.violations).toEqual([]);

  });
});
