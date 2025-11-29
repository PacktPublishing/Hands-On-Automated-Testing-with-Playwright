export default defineConfig({
  reporter: [
    ['list'], // Console output
    ['html', { outputFolder: 'playwright-report' }], // HTML report
    ['json', { outputFile: 'test-results.json' }], // JSON report
  ],
});
