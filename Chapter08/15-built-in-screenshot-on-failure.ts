// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // Capture screenshot after each test failure.
    screenshot: 'only-on-failure',

    // You can also configure other recording options here,
    // like video or trace, which are also very useful for debugging.
    // video: 'on-first-retry', // Example: record video on first retry
    // trace: 'on-first-retry', // Example: record trace on first retry
  },
});
