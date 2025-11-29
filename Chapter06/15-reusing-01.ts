// anti-pattern:
for (const url of urls) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  // ...
  await browser.close();
}