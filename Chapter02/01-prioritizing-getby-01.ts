test('Submits the form on button click', async ({ page }) => {
  const submitButton = await page.getByRole('button', 
                                            { name: /submit/i });
  await submitButton.click();
});