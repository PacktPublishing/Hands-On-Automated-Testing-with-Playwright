import { test, expect } from '@playwright/test';

test('Interact with nested iframes', async ({ page }) => {
  await page.goto('url');

  // Locate the parent iframe
  const parentFrame = page.frameLocator('#parentIframe');

  // Locate the nested iframe inside the parent iframe
  const nestedFrame = parentFrame.frameLocator('#nestedIframe');

  // Interact with an element inside the nested iframe
  await nestedFrame.locator('input[name="email"]')
                   .fill('test@xyz.com');
  await nestedFrame.locator('button').click();
});
