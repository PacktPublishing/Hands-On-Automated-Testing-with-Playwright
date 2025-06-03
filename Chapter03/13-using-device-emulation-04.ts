import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 16'],               // Start with iPhone 16 settings
  viewport: { width: 390, height: 600 }, // Override the screen size
  locale: 'es-ES',                       // Switch to Spanish
});

test('iPhone16 viewport & locale test', async ({ page }) => {
  // Verify page elements
});
