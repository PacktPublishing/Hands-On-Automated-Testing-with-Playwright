// Playwright’s retry feature
await expect(async () => {
  await page.getByText("Login").click();
}).toPass({
  timeout: 3000,
  interval: 1000,
});

// custom retry logic
async function retryAction(action, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await action();
      return;
    } catch (error) {
      console.warn(`Attempt ${attempt} failed: ${error}`);
      if (attempt === maxAttempts) throw error;
      await new Promise(res => setTimeout(res, 1000));
    }
  }
}

await retryAction(() => page.getByText("Login").click());
