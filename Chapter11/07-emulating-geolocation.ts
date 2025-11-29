import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 5'],  // Emulate a Pixel 5 device
  geolocation: {
    latitude: 41.889938,  // Mock latitude (Rome, Italy)
    longitude: 12.492507  // Mock longitude (Rome, Italy)
  },
  permissions: ['geolocation'],
});

test('should mock @geolocation to Rome on Pixel 5', async ({ page }) => {

  await page.goto('https://www.openstreetmap.org/');

  // Click the locator button 
  await page.getByRole('button', { name: /Show My Location/i }).click();

  // Wait for URL to contain Rome coordinates 
  await expect(page).toHaveURL(/41\.88/);
});
