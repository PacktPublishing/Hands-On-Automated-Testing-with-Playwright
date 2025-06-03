// userAgent
{
  name: 'webkit-ipad',
  use: {
    ...devices['Desktop Safari'],
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:138.0) Gecko/20100101 Firefox/138.0',
  },
},

// deviceScaleFactor
{
  name: 'chromium-high-dpi',
  use: {
    ...devices['Desktop Chrome'],
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  },
},

// viewport
{
  name: 'chromium-large',
  use: {
    ...devices['Desktop Chrome'],
    viewport: { width: 1920, height: 1080 },
  },
},
{
  name: 'firefox-mobile',
  use: {
    ...devices['Desktop Firefox'],
    viewport: { width: 375, height: 667 },
  },
},


// isMobile
{
  name: 'chromium-mobile-only',
  use: {
    ...devices['Desktop Chrome'],
    viewport: { width: 390, height: 844 },
    isMobile: true,
  },
},

// javaScriptEnabled
{
  name: 'chromium-no-js',
  use: {
    ...devices['Desktop Chrome'],
    javaScriptEnabled: false,
  },
},

// ignoreHTTPSErrors
{
  name: 'chromium-ignore-https',
  use: {
    ...devices['Desktop Chrome'],
    ignoreHTTPSErrors: true,
  },
},

// proxy
{
  name: 'chromium-with-proxy',
  use: {
    ...devices['Desktop Chrome'],
    proxy: {
      server: 'http://username:password@yourproxy.com:8080',
    },
  },
},

// permissions: granting geolocation permission
{
  name: 'chromium-with-location',
  use: {
    ...devices['Desktop Chrome'],
    permissions: ['geolocation'], // Grants geolocation permission
  },
}

// permissions: blocking all permissions
{
  name: 'chromium-no-camera',
  use: {
    ...devices['Desktop Chrome'],
    permissions: [], // Blocks all permissions
  },
}

// storageState
// Open a page and perform login. Then save storage state to a file:
// await context.storageState({ path: 'logged_in_state.json' });
// Now you can reference that file in your playwright.config.ts project config:
{
  name: 'chromium-logged-in',
  use: {
    ...devices['Desktop Chrome'],
    storageState: 'logged_in_state.json', // Path to a saved file
  },
},

// Browser-Specific Channels for Branded Browsers
{
  name: 'edge-stable',
  use: {
    ...devices['Desktop Edge'],
    channel: 'msedge', // Stable channel
  },
},
{
  name: 'chrome-beta',
  use: {
    ...devices['Desktop Chrome'],
    channel: 'chrome-beta', // Beta channel
  },
}