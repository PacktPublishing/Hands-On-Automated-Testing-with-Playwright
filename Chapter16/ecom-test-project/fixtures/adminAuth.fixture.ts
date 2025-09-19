// ./fixtures/adminAuth.fixture.ts
import { test as base, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

// Simple fixture that provides an authenticated page
export const test = base.extend<{ adminAuthPage: Page }>({
  adminAuthPage: async ({ browser }, use) => {
    const storageStatePath = ".auth/adminStorageState.json";

    const setupContext = await browser.newContext();
    const setupPage = await setupContext.newPage();
    const loginPage = new LoginPage(setupPage);
    await loginPage.goto();
    await loginPage.login(
      process.env.ADMIN_EMAIL!,
      process.env.ADMIN_PASSWORD!
    );
    await expect(loginPage.navMenu).toContainText("John Doe");

    // await expect(setupPage.getByRole("navigation")).toContainText("John Doe");
    await setupContext.storageState({ path: storageStatePath });
    await setupContext.close();

    // Create new context with saved auth state
    const context = await browser.newContext({
      storageState: storageStatePath,
    });
    const page = await context.newPage();

    await use(page);

    await context.close();
  },
});

export { expect };
