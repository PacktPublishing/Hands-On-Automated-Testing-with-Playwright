import { test, expect, devices  } from '@playwright/test';

test.describe('Geolocation Mocking', () => {
  test('should use mocked geolocation for Pixel 5', async ({ browser }) => {

    // Create a new browser context with the specified device, geolocation, and permissions.
    const context = await browser.newContext({
      ...devices['Pixel 5'], // Emulate a Pixel 5 device
      geolocation: {
        longitude: 12.492507, // Mock longitude (Rome, Italy)
        latitude: 41.889938,  // Mock latitude (Rome, Italy)
        accuracy: 50          // Mock accuracy in meters
      },
      permissions: ['geolocation'] // Grant permission to use geolocation
    });

    const page = await context.newPage();

    // Navigate to a page that can display geolocation data.
    await page.goto('https://www.openstreetmap.org/');

    // Click the "Show My Location" button.
    await page.getByRole('button', { name: 'Show My Location' }).click();

    // Clean up by closing the context.
    await context.close();
  });
});
