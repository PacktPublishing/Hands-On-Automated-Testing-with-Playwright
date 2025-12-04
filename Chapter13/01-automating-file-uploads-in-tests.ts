import { test, expect } from '@playwright/test';
import path from 'node:path';

test('should upload a single file', async ({ page }) => {
  // Navigate to the page with the file input
  await page.goto('https://demoqa.com/automation-practice-form');

  // Build an absolute path to the file you want to upload
  const filePath = path.join(__dirname, 'document.pdf');

  // Locate the input element and set the file
  await page.locator('input[type="file"]').setInputFiles(filePath);

  // Confirm the file input reflects the selected file
  await expect(page.locator('#uploadPicture')).toHaveValue(/document\.pdf$/);

  // You can also click the submit button and
  // add assertions to verify the upload was successful
});
