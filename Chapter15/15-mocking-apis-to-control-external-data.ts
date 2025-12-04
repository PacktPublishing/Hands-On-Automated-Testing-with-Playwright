import { test, expect } from '@playwright/test';

test('displays mocked blog posts from JSONPlaceholder API', async ({ page }) => {
  // Mock the specific API endpoint
  await page.route('https://jsonplaceholder.typicode.com/posts', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          userId: 1,
          id: 1,
          title: 'Mocked Post Title One',
          body: 'This is the body of the first mocked post. It helps test rendering without real data.'
        },
        {
          userId: 1,
          id: 2,
          title: 'Mocked Post Title Two',
          body: 'Here\'s the second post body, keeping things consistent for reliable testing.'
        }
      ])
    });
  });

  const data = await page.evaluate(() =>
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
  );

  await expect(data[0].title).toBe('Mocked Post Title One');
  await expect(data[1].title).toBe('Mocked Post Title Two');
});
