import { test, expect } from '@playwright/test';
const fs = require('fs').promises;

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

  // Verify the file size
  const stats = await fs.stat(downloadPath);

  // Convert bytes to MB
  const fileSizeInMB = stats.size / (1024 * 1024);

  // Ensure file size is reasonable (>100KB)
  expect(fileSizeInMB).toBeGreaterThan(0.100);

  // Ensure file size isn't unrealistically large (<100MB)
  expect(fileSizeInMB).toBeLessThan(100);

  console.log(`Downloaded file: ${fileName} at ${downloadPath}, Size: ${fileSizeInMB.toFixed(2)} MB`);
});;
