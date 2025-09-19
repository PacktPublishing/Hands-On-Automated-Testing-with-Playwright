import { test, expect } from '@playwright/test';

test('should share cookies between pages in the same context', async ({ context }) => {
  // Create two pages within the same context
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  // Set a cookie on page1
  await page1.goto('https://playwright.dev/');
  await page1.context().addCookies([{
    name: 'test_cookie',
    value: 'test_value',
    domain: '.example.com',
    path: '/',
  }]);

  // Navigate to the same domain on page2
  await page2.goto('https://playwright.dev/');

  // Verify that page2 has access to the same cookie
  const cookies = await page2.context().cookies();
  const testCookie = cookies.find(cookie => cookie.name === 'test_cookie');
  expect(testCookie).toBeDefined();
  expect(testCookie.value).toBe('test_value');

  // Clean up
  await page1.close();
  await page2.close();
});
