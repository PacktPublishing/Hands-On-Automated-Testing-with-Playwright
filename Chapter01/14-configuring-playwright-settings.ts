import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where tests are located
  timeout: 30000, // Test timeout in milliseconds
  use: {
    browserName: 'chromium', // Default browser
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
  },
});
