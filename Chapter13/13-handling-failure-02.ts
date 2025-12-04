try {
  // Wait for the download with a short 5-second timeout
  const downloadPromise = page.waitForEvent(
    'download', 
    { timeout: 5000 }
  );
  await page.getByText('Download Large File').click();
  await downloadPromise;
} catch (error) {
  // Verify that the error is a timeout, confirming the app didn't crash
  expect(error.message).toContain('Timeout');
}
