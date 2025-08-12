import { test, expect } from '@playwright/test';

test('Admin vs Regular User Permissions', async ({ browser }) => {
  // Create separate contexts for admin and user
  const adminContext = await browser.newContext();
  const userContext = await browser.newContext();

  const adminPage = await adminContext.newPage();
  const userPage = await userContext.newPage();

  // Admin login
  await adminPage.goto('yourwebsite/login');
  await adminPage.fill('#username', 'admin');
  await adminPage.fill('#password', 'admin123');
  await adminPage.click('#login');

  // User login
  await userPage.goto('yourwebsite/login');
  await userPage.fill('#username', 'user');
  await userPage.fill('#password', 'user123');
  await userPage.click('#login');

  // Admin should see delete button
  await adminPage.goto('yourwebsite/admin-panel');
  await expect(adminPage.locator('#delete-button')).toBeVisible();

  // User should not see delete button
  await userPage.goto('yourwebsite/admin-panel');
  await expect(userPage.locator('#delete-button')).toHaveCount(0);

  await adminContext.close();
  await userContext.close();
});
