const context = await browser.newContext({
  ...devices['iPhone 12'],
  screen: {
    width: 390,  // Portrait width
    height: 844  // Portrait height
  }
});
