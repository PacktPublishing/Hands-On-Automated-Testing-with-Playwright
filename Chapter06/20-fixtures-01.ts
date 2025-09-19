import { test } from '../fixtures/auth';
import { expect } from '@playwright/test';

test('should display shopping cart after login', async ({ loggedInPage }) => {
  const cartLink = loggedInPage.locator('.shopping_cart_link');
  await expect(cartLink).toBeVisible();
});
