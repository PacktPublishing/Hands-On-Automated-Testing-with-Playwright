const context = await browser.newContext({
  ...devices['iPhone 12'],
  screen: {
    width: 844,  // Landscape width
    height: 390  // Landscape height
  }
});
