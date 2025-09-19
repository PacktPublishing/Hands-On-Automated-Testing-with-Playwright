import { test } from '@playwright/test';

test('check browser', async ({ browserName }) => {
  if (browserName === "chromium") {
    console.log(`Running on ${browserName}`);
  }
});
