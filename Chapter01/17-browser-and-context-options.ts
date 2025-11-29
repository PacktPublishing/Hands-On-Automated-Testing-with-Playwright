export default defineConfig({
  use: {
    browserName: 'firefox',
    headless: false,
    viewport: { width: 1920, height: 1080 },
    locale: 'en-GB',
    timezoneId: 'Europe/London',
    device: 'Desktop Firefox',
  },
});
