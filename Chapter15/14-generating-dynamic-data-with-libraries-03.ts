import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('register new user', async ({ page }) => {
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  page.goto('/login');

  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#success-message')).toHaveText(`Account created for ${username}`);
});
