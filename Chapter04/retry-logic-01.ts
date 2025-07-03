await expect(async () => {
  await page.getByText("Login").click();
}).toPass({
  timeout: 3000,
  interval: 1000,
});