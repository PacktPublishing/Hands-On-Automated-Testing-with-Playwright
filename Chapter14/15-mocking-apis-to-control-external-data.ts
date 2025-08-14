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

  // Set up a simple HTML page that fetches and displays the posts
  await page.setContent(`
    <div id="posts"></div>
    <script>
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          const postsContainer = document.getElementById('posts');
          posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-card';
            postElement.innerHTML = '<h2 class="title">' + post.title + '</h2>';
            postsContainer.appendChild(postElement);
          });
        });
    </script>
  `);
  
  // Verify the UI elements show the mocked data
  await expect(page.locator('.post-card:nth-child(1) .title')).toHaveText('Mocked Post Title One');
  await expect(page.locator('.post-card:nth-child(2) .title')).toHaveText('Mocked Post Title Two');
});
