import { test, expect } from '@playwright/test';
import path from 'path';

test('should upload a single file', async ({ page }) => {
  // Navigate to the page with the file input
  await page.goto('https://demoqa.com/automation-practice-form');

  // Define the path to the file
  const filePath = path.join(__dirname, 'document.pdf');

  // Locate the input element and set the file
  await page.locator('input[type="file"]').setInputFiles(filePath);

  // You can also click the submit button and
  // add assertions to verify the upload was successful
});
