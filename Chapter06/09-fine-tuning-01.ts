// playwright.config.js
const { defineConfig } = require('@playwright/test');
const os = require('os');

const cpuCount = os.cpus().length;

module.exports = defineConfig({
  workers: Math.max(1, cpuCount - 1),
  // other config options...
});
