import { test } from '../fixtures/console.fixture.ts';

test.describe('Page Load Console Logs', () => {
  test('should load the page without any console errors', async ({ noConsoleErrors, page }) => {
    // Navigate to the URL. 
    // The `noConsoleErrors` fixture is active during this navigation.
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/');
  });
});
