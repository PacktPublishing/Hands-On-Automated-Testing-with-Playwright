// ./playwright.config.ts
import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env", quiet: true });

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI, // Prevent `test.only` in CI
  retries: process.env.CI ? 2 : 0, // Retry failed tests in CI
  workers: process.env.CI ? 1 : undefined, // Control parallel workers
  reporter: [["html"], ["list"]], // Generate HTML and list reports
  use: {
    trace: "on", // Capture traces always for now
    baseURL: process.env.BASE_URL || "https://practicesoftwaretesting.com", // Base URL for navigation
    testIdAttribute: "data-test", // Custom test ID attribute
    headless: true,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "setup", // Authentication setup project
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "customer1-chromium",
      dependencies: ["setup"], // Run setup first
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth/customer1StorageState.json", // Load auth state
      },
    },
    // Additional projects for Firefox, WebKit can be added here
  ],
});
