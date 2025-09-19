import { test } from '@playwright/test';

test('my test with video', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ... test steps

  // Get the path to the video file for this page
  const videoPath = await page.video()?.path();
  console.log(`Video saved at: ${videoPath}`);
});
