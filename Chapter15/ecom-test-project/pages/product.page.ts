// ./pages/product.page.ts
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
  readonly productCards: Locator;
  readonly addedToCartMessage: Locator;
  readonly productName: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.productCards = page.locator(".card");
    this.addedToCartMessage = page.getByLabel(
      "Product added to shopping cart."
    );
    this.productName = page.getByTestId("product-name");
    this.addToCartButton = page.getByTestId("add-to-cart");
  }

  async goto(productId?: string) {
    await this.page.goto(`/product/${productId}`);
  }

  async clickProductByIndex(index: number) {
    const product = this.productCards.nth(index);
    await product.click();
  }
}
