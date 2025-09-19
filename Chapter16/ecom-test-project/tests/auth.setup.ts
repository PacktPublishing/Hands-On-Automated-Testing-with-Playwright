// ./tests/auth.setup.ts
import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

setup("Create Customer 1 Authentication", async ({ page, context }) => {
  const email = process.env.CUSTOMER_1_EMAIL || "";
  const password = process.env.CUSTOMER_1_PASSWORD || "";
  const customer1AuthFile = ".auth/customer1StorageState.json";

  const loginPage = new LoginPage(page);
  await loginPage.gotoHome();
  await loginPage.navMenuSignIn.click();
  await loginPage.login(email, password);

  // Verify login was successful
  await expect(loginPage.navMenu).toContainText("Jane Doe");

  // Save storage state into the file.
  await context.storageState({ path: customer1AuthFile });
});
