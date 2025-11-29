test('my debugging test', async ({ page }) => {
  await page.goto('https://example.com');
  // ... some actions
  await page.pause(); // Execution will pause here and open the Inspector
  // ... more actions
});

