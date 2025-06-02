await page.getByRole('link', { name: 'Dashboard' }).click();
await page.waitForNavigation({ url: 'https://example.com/dashboard', timeout: 10000 });