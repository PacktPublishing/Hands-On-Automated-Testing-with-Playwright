import { test, expect } from '@playwright/test';

test.describe('DemoQA Automation Practice Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
  });

  test('should interact with gender radio buttons', async ({ page }) => {
    const maleRadio = page.locator('#gender-radio-1');
    const femaleRadio = page.locator('#gender-radio-2');
    const otherRadio = page.locator('#gender-radio-3');

    await expect(maleRadio).not.toBeChecked();
    await expect(femaleRadio).not.toBeChecked();
    await expect(otherRadio).not.toBeChecked();

    await maleRadio.check();
    await expect(maleRadio).toBeChecked();
    await expect(femaleRadio).not.toBeChecked();
    await expect(otherRadio).not.toBeChecked();

    await femaleRadio.check();
    await expect(maleRadio).not.toBeChecked();
    await expect(femaleRadio).toBeChecked();
    await expect(otherRadio).not.toBeChecked();
  });

  test('should interact with hobbies checkboxes', async ({ page }) => {
    const sportsCheckbox = page.locator('#hobbies-checkbox-1');
    const readingCheckbox = page.locator('#hobbies-checkbox-2');
    const musicCheckbox = page.locator('#hobbies-checkbox-3');

    await expect(sportsCheckbox).not.toBeChecked();
    await expect(readingCheckbox).not.toBeChecked();
    await expect(musicCheckbox).not.toBeChecked();

    await sportsCheckbox.check();
    await expect(sportsCheckbox).toBeChecked();
    await expect(readingCheckbox).not.toBeChecked();
    await expect(musicCheckbox).not.toBeChecked();

    await readingCheckbox.check();
    await expect(sportsCheckbox).toBeChecked();
    await expect(readingCheckbox).toBeChecked();
    await expect(musicCheckbox).not.toBeChecked();

    await sportsCheckbox.uncheck();
    await expect(sportsCheckbox).not.toBeChecked();
    await expect(readingCheckbox).toBeChecked();
    await expect(musicCheckbox).not.toBeChecked();
  });
});
