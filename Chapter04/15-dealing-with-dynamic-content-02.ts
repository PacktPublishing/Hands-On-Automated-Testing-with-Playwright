await page.waitForFunction(() => document.querySelector('.loaded') !== null, {
  timeout: 15000,
});
