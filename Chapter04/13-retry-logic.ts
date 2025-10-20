// Waits until the loader disappears (retries until it passes)
await expect(async () => {
  // Assert that the loader is no longer visible
  await expect(page.locator('.loader')).not.toBeVisible();
}).toPass({
  timeout: 3000,    // Try for 3 seconds
  interval: 1000,   // Check every half second
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
