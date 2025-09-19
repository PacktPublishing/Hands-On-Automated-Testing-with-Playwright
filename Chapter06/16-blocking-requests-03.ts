await page.route('**/api/user/profile', (route) => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ name: 'Test User', id: 123 }),
  });
});
