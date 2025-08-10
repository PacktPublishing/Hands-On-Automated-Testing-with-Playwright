// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  // ... other configs
  use: {
    trace: 'on-first-retry', // 'on', 'off', 'retain-on-failure'
  },
});
