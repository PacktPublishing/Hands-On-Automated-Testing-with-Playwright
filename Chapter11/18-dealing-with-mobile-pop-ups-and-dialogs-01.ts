await page.locator('#cookie-consent-accept').waitFor({ state: 'visible' });
await page.touchscreen.tap('#cookie-consent-accept');
