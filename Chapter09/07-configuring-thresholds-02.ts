import { defineConfig } from '@playwright/test';

export default defineConfig({
  expect: {
    toHaveScreenshot: {
      threshold: 0.2,         // 20% pixel ratio difference allowed
      maxDiffPixels: 100      // max pixels allowed to differ
    },
  },
  // other options ...
});
