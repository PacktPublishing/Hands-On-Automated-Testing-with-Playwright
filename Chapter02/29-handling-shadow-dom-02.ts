import { test, expect } from '@playwright/test';
test('interacting with shadow dom component', async ({ page }) => {
  await page.goto('webpage.html');

  // Locate the host element
  const widget = page.locator('my-widget');

  // Now you can locate elements within the shadow root
  const internalButton = widget.locator('.internal-button');

  // Perform actions on the internal element
  await internalButton.click();
  const buttonText = await internalButton.innerText();
  console.log(buttonText);

  // You can add assertions here to verify the behavior
  // For example, if clicking the button changes something 
  // on the page:
  // await expect(page.locator('#some-indicator')).toHaveText('Button Clicked!');
});
