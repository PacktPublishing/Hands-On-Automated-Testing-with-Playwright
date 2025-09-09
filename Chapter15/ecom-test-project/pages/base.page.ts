// ./pages/base.page.ts
import { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly navMenu: Locator;
  readonly navMenuHome: Locator;
  readonly navMenuCategories: Locator;
  readonly navCategoryList: Locator;
  readonly navMenuContact: Locator;
  readonly navMenuSignIn: Locator;
  readonly navMenuLanguageSelect: Locator;
  readonly navCart: Locator;
  readonly navCartQuantity: Locator;

  constructor(page: Page) {
    this.page = page;

    // Top Navigation
    this.navMenu = page.getByTestId("nav-menu");
    this.navMenuHome = page.getByTestId("nav-home");
    this.navMenuCategories = page.getByTestId("nav-categories");
    this.navCategoryList = page.getByLabel("nav-categories");
    this.navMenuContact = page.getByTestId("nav-contact");
    this.navMenuSignIn = page.getByTestId("nav-sign-in");
    this.navMenuLanguageSelect = page.getByTestId("language-select");
    this.navCart = page.getByTestId("nav-cart");
    this.navCartQuantity = page.getByTestId("cart-quantity");
  }

  async gotoHome() {
    await this.page.goto("/");
  }

  async selectCategory(category: string) {
    await this.navMenuCategories.click();
    await this.navCategoryList.getByText(`${category}`).click();
  }

  async clearStorage(page: Page) {
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await page.context().clearCookies();
    await page.reload();
  }
}
