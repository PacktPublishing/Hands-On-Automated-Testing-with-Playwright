// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  shard: {
    total: 3,      // Total number of shards (splits)
    current: 1,    // This shard instance 
  },
});