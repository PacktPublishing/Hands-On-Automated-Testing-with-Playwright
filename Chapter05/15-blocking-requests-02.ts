await page.route('**/ads.googleads.com/**', (route) => route.abort());
await page.route('**/analytics.googleads.net/**', (route) => route.abort());