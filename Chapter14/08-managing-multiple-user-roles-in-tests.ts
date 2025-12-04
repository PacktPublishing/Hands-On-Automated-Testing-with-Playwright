import { test, expect, BrowserContext } from "@playwright/test";

let standardContext: BrowserContext;
let lockedoutContext: BrowserContext;

test.afterAll(async () => {
  await standardContext.close();
  await lockedoutContext.close();
});

test("Standard vs Locked Out Permissions", async ({ browser }) => {
  // Create separate contexts for standard and locked out user
  standardContext = await browser.newContext();
  lockedoutContext = await browser.newContext();

  const standardPage = await standardContext.newPage();
  const lockedoutPage = await lockedoutContext.newPage();

  // Standard login
  await standardPage.goto("https://www.saucedemo.com/");
  await standardPage.getByPlaceholder("Username").fill("standard_user");
  await standardPage.getByPlaceholder("Password").fill("secret_sauce");
  await standardPage.getByRole("button", { name: "Login" }).click();

  // Verify standard user can access inventory page
  await expect(standardPage).toHaveURL(
    "https://www.saucedemo.com/inventory.html"
  );

  await expect(standardPage.locator(".title")).toHaveText("Products");

  // locked_out_user login
  await lockedoutPage.goto("https://www.saucedemo.com/");
  await lockedoutPage.getByPlaceholder("Username").fill("locked_out_user");
  await lockedoutPage.getByPlaceholder("Password").fill("secret_sauce");
  await lockedoutPage.getByRole("button", { name: "Login" }).click();

  // Verify locked out user gets error message
  const errorMessage = lockedoutPage.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
});
