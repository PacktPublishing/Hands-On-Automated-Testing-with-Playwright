export default defineConfig({
  timeout: 30000, // 30 seconds per test
  globalTimeout: 1800000, // 30 minutes for the entire suite
  use: {
    actionTimeout: 10000, // 10 seconds per action
  },
});
