import { test, expect } from '@playwright/test';

test('should upload multiple files successfully', async ({ page }) => {
  // Navigate to the file upload page.
  await page.goto('https://filebin.net/');

  // Locate the file input element
  const fileInput = page.locator('input[type="file"]');

  // Set multiple files for upload.
  // Ensure these files exist in your test directory.
  await fileInput.setInputFiles([
    'tests/sample1.jpg',
    'tests/sample2.jpg',
    'tests/sample3.jpg'
  ]);

  // Wait for the shareable link to appear, 
  // indicating upload has finished
  await expect(page.getByRole('link', { name: ' Download files' })).toBeVisible();

  // Verify that the file names are displayed in the UI
  await expect(
    page.getByRole('link', { name: 'sample1.jpg' }).first()
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'sample2.jpg' }).first()
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'sample3.jpg' }).first()
  ).toBeVisible();
});  
