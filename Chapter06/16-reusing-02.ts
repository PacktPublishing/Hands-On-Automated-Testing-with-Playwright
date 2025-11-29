// recommended:
const browser = await chromium.launch();

for (const url of urls) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  // do your checks...
  await context.close();
}

await browser.close();