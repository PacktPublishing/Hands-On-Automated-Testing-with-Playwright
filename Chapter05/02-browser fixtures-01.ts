import { test, expect } from '@playwright/test';

test('manage browser-level settings', async ({ browser }) => {
  // Create a new context with custom settings
  const context = await browser.newContext({
    userAgent: 'My Custom User Agent',
    locale: 'fr-FR',
    // other options like timezoneId, colorScheme, etc.
  });

  // Create a page inside this context
  const page = await context.newPage();
  await page.goto('url');

  // Your test actions and assertions here

  await context.close();
});
