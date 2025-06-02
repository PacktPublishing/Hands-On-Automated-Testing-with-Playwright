import { test, expect } from '@playwright/test';

test('interacting with shadow dom using deprecated combinators', async ({ page }) => {
  await page.goto('webpage.html');

  const internalButton = page.locator('my-widget >>> .internal-button');

  await internalButton.click();
  const buttonText = await internalButton.innerText();
  console.log(buttonText);
});
