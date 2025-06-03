import { test, expect } from '@playwright/test';

test('should log browser name', async ({ page }) => {
  const browserName = page.context().browser().browserType().name();
  console.log(`Currently running on: ${browserName}`);

  if (browserName === 'firefox') {
    console.log('This is a Firefox-specific step.');
    // Add Firefox-specific actions or assertions
  } else if (browserName === 'chromium') {
    console.log('This is a Chromium-specific step.');
    // Add Chromium-specific actions or assertions
  }
});