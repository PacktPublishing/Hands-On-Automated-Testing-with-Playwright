// Select a div containing specific text
await page.locator('//div[contains(text(), "Welcome")]').click();

// Select a button that is a child of a specific form
await page.locator('//form[@id="login-form"]//button').click();