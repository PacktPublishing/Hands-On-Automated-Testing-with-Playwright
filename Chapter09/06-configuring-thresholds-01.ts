await expect(page).toHaveScreenshot('submit-button.png', {
  threshold: 0.2,       // Allow 20% difference ratio
  maxDiffPixels: 100    // Or allow up to 100 differing pixels
});
