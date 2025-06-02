import { test, expect } from '@playwright/test';

test('Interact with iframe', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/iframes-test.html');

  // Locate the iframe
  const frame = page.frameLocator('#thedynamichtml');

  // Interact with elements inside the iframe
  await expect(frame.getByRole('heading', { name: 'iFrame' }))
    .toBeVisible();
});
