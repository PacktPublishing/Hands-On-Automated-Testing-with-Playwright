import { test } from '../fixtures/test-setup';
import { expect } from '@playwright/test';

test('access cart after login', async ({ loggedInPage }) => {
  await loggedInPage.goto('https://www.saucedemo.com/cart.html');
  
  // Make sure Checkout button is visible
  await expect(loggedInPage.getByRole('button', { name: 'Checkout' })).toBeVisible();
});
