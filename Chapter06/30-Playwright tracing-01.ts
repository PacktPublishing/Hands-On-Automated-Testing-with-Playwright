import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    trace: 'on-first-retry', // Options: 'on', 'off', 'retain-on-failure', 'on-first-retry'
  },
});
