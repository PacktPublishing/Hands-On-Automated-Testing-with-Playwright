import { test, expect } from '@playwright/test';

test('Trigger and verify Firefox download', async ({ page }) => {
  // Navigate to the Firefox download page
  await page.goto('https://www.firefox.com/en-US/');

  // Wait for the download event
  const downloadPromise = page.waitForEvent('download', { timeout: 30000 });

  // Locate and click the primary download button
  await page.getByTestId('download-button-thanks').click();

  // Wait for the download to start
  const download = await downloadPromise;

  // Verify the download file
  const fileName = download.suggestedFilename();

  // Match expected Firefox installer file extensions
  expect(fileName).toMatch(/Firefox.*\.exe|dmg|deb|tar\.bz2$/);

  // Save the downloaded file to verify it later (for CI environments)
  await download.saveAs(`./downloads/${fileName}`);

  // Verify the download path exists
  const downloadPath = await download.path();
  expect(downloadPath).not.toBeNull();

  console.log(`Downloaded file: ${fileName} at ${downloadPath}`);
});
