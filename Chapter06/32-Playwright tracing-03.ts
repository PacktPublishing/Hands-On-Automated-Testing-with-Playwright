import { test } from '@playwright/test';

test.use({ trace: 'on' }); // or 'retain-on-failure' etc.

test('test', async ({ page }) => {
  // your test steps here
});
