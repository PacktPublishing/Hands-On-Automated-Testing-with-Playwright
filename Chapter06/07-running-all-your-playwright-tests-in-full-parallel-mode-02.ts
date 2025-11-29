projects: [
  {
    name: 'chromium',
    use: { browserName: 'chromium' },
    fullyParallel: true, // only this project runs all tests in parallel
  },
  {
    name: 'firefox',
    use: { browserName: 'firefox' },
  },
],
