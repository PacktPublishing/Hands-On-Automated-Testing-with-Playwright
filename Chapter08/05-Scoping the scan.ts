import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should analyze accessibility of the form and exclude the ad banner', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  const results = await new AxeBuilder({ page })
    .include('form')        // Only analyze elements within the 'form'
    .exclude('.Google-Ad')  // Skip elements with .Google-Ad class    .analyze();

  // Log the violations for debugging/reporting
  if (results.violations.length > 0) {
    console.log('Accessibility Violations found:');
    results.violations.forEach(violation => {
      console.log(`- ${violation.id}: ${violation.description}`);
      console.log(`  Help: ${violation.helpUrl}`);
      console.log('  Nodes:', violation.nodes.map(node => node.html).join('\n'));
      console.log('---');
    });
  }

  // If violations are found, this test will fail and list them.
  expect(results.violations).toEqual([]);
});
