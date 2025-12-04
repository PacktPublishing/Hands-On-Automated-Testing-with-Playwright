import { test, expect } from '@playwrighttest';

test('should log in and save storage state for standard_user', async ({ page }) = {
  await page.goto('httpswww.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name 'Login' }).click();
  await expect(page).toHaveURL('httpswww.saucedemo.cominventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();
  await page.context().storageState({ path 'standard_user_auth.json' });
});
