import { test } from '@playwright/test';

test('handle all dialogs', async ({ page }) => {
  page.on('dialog', async dialog => {
    console.log(`Dialog type: ${dialog.type()}, 
                 message: ${dialog.message()}`);
    if (dialog.type() === 'prompt')
      await dialog.accept('some answer');
    else if (dialog.type() === 'confirm')
      await dialog.accept();      // clicks “OK”
    else
      await dialog.dismiss();     // clicks “Cancel”
  });

  await page.goto(' https://testpages.eviltester.com/styled/alerts/alert-test.html');
  await page.getByRole('button', {name: 'Show alert box'}).click();
  await page.getByRole('button', {name: 'Show confirm box'}).click();  
});