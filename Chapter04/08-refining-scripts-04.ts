// Improved:
import { test, expect } from '@playwright/test';

test('netlify.app - click on button', async ({ page }) => {
  try {
    await page.goto('https://sweetshop.netlify.app', {timeout:30000});
    await expect(page.getByText('Welcome')).toBeVisible();
    await page.getByRole('link', { name: 'Browse Sweets' }).click();
  } catch (error) {
    console.error('Something went wrong:', error);
    throw error;
  }
});
