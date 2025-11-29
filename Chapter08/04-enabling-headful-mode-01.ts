// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    // ... other configurations
  },
});
