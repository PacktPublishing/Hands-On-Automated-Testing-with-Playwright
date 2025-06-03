test('feature X works', async ({ page, browserName }) => {
  if (browserName === 'webkit' && someKnownWebKitIssue) {
    test.skip(true, 'Skipping due to known WebKit issue XYZ');
  }
  // ... rest of the test logic ...
});
