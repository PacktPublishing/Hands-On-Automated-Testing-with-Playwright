import { test, expect } from '@playwright/test';
test('State dropdown functionality', async ({ page }) => {
  // Navigate to the form page
  await page.goto('https://demoqa.com/automation-practice-form');

  // Locate the state dropdown
  const stateDropdown = page.locator('#state');

  // Verify state dropdown is visible and enabled
  await expect(stateDropdown).toBeVisible();
  await expect(stateDropdown).toBeEnabled();

  // Click state dropdown to open it
  await stateDropdown.click();

  // Select a state ("Haryana")
  const stateOption = page.getByText('Haryana');
  await expect(stateOption).toBeVisible();
  await stateOption.click();
});
