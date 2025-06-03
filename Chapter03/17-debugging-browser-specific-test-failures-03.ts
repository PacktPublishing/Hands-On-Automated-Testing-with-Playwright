projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      launchOptions: {
        slowMo: 1000, // pauses for 1000 milliseconds between actions 
      }
    }
  }
]
