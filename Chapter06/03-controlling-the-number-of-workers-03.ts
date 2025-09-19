import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  workers: process.env.CI ? 2 : undefined, 

  use: {
    // Other browser options
  },
};

export default config;
