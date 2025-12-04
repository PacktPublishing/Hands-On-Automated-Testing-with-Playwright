// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'e2e-tests',
      dependencies: ['setup'],
      use: {
        storageState: '.auth/standard_user.json',
      },
    },
  ],
});
