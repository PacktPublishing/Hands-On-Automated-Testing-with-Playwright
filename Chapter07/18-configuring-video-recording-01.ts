import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // ... other configurations
    video: {
      mode: 'on',

      // Optional: specify video resolution
      size: { width: 1280, height: 720 },
    },
    // You also need to specify a directory for the videos 
    contextOptions: {
      recordVideo: {
        dir: 'test-results/my-videos/', // Output directory
      },
    },
  },
  // ... other configurations
});
