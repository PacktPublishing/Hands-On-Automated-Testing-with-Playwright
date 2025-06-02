// Fill in the input with ID 'login-form'
await page.locator('#login-form').fill('user@example.com');

// Fill in a password input
await page.locator('input[type="password"]').fill('secret');