module.exports = defineConfig({
  use: {
    headless: !!process.env.CI,  // true in CI, false locally
  },
});
