import { test, expect } from '@playwright/test';

test('Trigger and verify CSV download', async ({ page }) => {
  // Navigate to the famous art download page
  await page.goto('https://www.nga.gov/artworks/106382-self-portrait');

  // Wait for the download event
  const downloadPromise = page.waitForEvent('download', { timeout: 30000 });

  // Locate and click the primary download button
  await page.getByRole('link', { name: 'Download', exact: true }).click();

  // Wait for the download to start
  const download = await downloadPromise;

  // Verify the download file
  const fileName = download.suggestedFilename();

  // Match expected downloaded file name
  expect(fileName).toMatch(/self-portrait_1998.74.5.jpg/);
  console.log(`Downloaded file: ${fileName}.`);
});
