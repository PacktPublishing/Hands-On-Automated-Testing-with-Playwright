// ./tests/product.spec.ts
import { ProductPage } from "../pages/product.page";
import { test, expect } from "../fixtures/adminAuth.fixture";

test("Add product to cart", async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.gotoHome();
  await productPage.selectCategory("Hand Tools");
  await productPage.clickProductByIndex(0);

  expect(productPage.productName).toHaveText("Combination Pliers");

  await productPage.addToCartButton.click();
  await expect(productPage.addedToCartMessage).toHaveText(
    "Product added to shopping cart."
  );

  // wait for the message to disappear (up to 10 seconds)
  await expect(productPage.addedToCartMessage).not.toBeVisible({
    timeout: 10000,
  });
  await expect(productPage.navCartQuantity).toHaveText("1");
});

test("Add product to cart with admin auth fixture", async ({
  adminAuthPage,
}) => {
  // Use the authenticated page created by fixture for all interactions
  const productPage = new ProductPage(adminAuthPage);
  await productPage.gotoHome();
  await productPage.selectCategory("Hand Tools");
  await productPage.clickProductByIndex(0);

  expect(productPage.productName).toHaveText("Combination Pliers");

  await productPage.addToCartButton.click();
  await expect(productPage.addedToCartMessage).toHaveText(
    "Product added to shopping cart."
  );

  // wait for the message to disappear (up to 10 seconds)
  await expect(productPage.addedToCartMessage).not.toBeVisible({
    timeout: 10000,
  });
  await expect(productPage.navCartQuantity).toHaveText("1");
});
