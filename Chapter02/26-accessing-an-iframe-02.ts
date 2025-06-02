import { test, expect } from '@playwright/test';

test('Interact with iframe', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/iframes-test.html');

  // Interact with elements inside the iframe
  await expect(page.locator('#thedynamichtml')
                   .contentFrame()
                   .getByRole('heading', { name: 'iFrame' })
              ).toBeVisible();
});
