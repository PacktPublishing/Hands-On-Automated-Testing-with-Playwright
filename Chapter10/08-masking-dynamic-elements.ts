await expect(page).toHaveScreenshot('homepage.png', {

  // Pass an array of locators to mask
  mask: [page.locator('.dynamic-timestamp'), 
         page.locator('.user-avatar')]
});
