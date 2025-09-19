const context = await browser.newContext({
  ...devices['iPhone 13'],
  permissions: { 'geolocation': 'grant', 'notifications': 'deny' },
});
