// Fills the input with id="username"
await page.getByLabel('Username').fill('my_user');

// Fills the input with a placeholder attribute
await page.getByPlaceholder('Enter your password').fill('S3cr3tP@ssw0rd!');
