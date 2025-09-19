// tests/broken-images.spec.ts
import { expect } from '@playwright/test';
import { test } from "../fixtures/image-validator.fixture.ts;

test.describe('Broken Images Validation', () => {
  test('should not find any broken images on the page', async ({ page, imageValidator }) => {
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/');
    
    await expect(page.locator('[data-test="product-1"]')).toBeVisible();
    
    await imageValidator();
  });
});
