export default defineConfig({
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Mobile Safari',
      use: { device: 'iPhone 16' },
    },
  ],
});
