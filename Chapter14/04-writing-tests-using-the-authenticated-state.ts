// tests/inventory.test.ts
import { test, expect } from '@playwright/test';

test('should access inventory page with authenticated state', async ({ page }) => {
  // No need to log in,
  // the storage state is applied from .auth/standard_user.json
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Verify the inventory page is accessible
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Perform an action on the inventory page
  await expect(page.locator('.inventory_item').first()).toBeVisible();
  await page.getByText('Add to cart').first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); 
});
