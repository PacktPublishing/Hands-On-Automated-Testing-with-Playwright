// ./tests/registration.spec.ts
import { test, expect } from "@playwright/test";
import { createUser, createInvalidUser, createDOB } from "../data/factory";
import { RegistrationPage } from "../pages/registration.page";

test.describe("Practice Software Testing Site Tests", async () => {
  let user: any;
  let invalidUser: any;

  test.use({ storageState: undefined });

  test.beforeEach(async () => {
    invalidUser = createInvalidUser();
    user = createUser();
  });

  test("Successful user registration", async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.goto();
    await registrationPage.clearStorage(page);

    await registrationPage.firstNameInput.fill(user.firstName);
    await registrationPage.lastNameInput.fill(user.lastName);
    await registrationPage.dobInput.fill(user.dob);
    await registrationPage.streetInput.fill(user.streetAddress);
    await registrationPage.postalCodeInput.fill(user.zip);
    await registrationPage.cityInput.fill(user.city);
    await registrationPage.stateInput.fill(user.state);
    await registrationPage.countrySelect.selectOption({ label: user.country });
    await registrationPage.phoneInput.fill(user.phone);
    await registrationPage.emailInput.fill(user.email);
    await registrationPage.passwordInput.fill(user.password);

    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/users/register") && response.status() === 201
    );

    await registrationPage.registerSubmitButton.click();
    await responsePromise;

    await expect(page).toHaveURL(/auth\/login/);
  });

  test("Negative registration with invalid data", async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();

    await registrationPage.clearStorage(page);

    await registrationPage.firstNameInput.fill(invalidUser.firstName);
    await registrationPage.dobInput.fill(invalidUser.dob);
    await registrationPage.passwordInput.fill(invalidUser.password);

    await registrationPage.submitRegistration();

    await expect(page.getByText("First name is required")).toBeVisible();
    await expect(page.getByText("Please enter a valid date")).toBeVisible();
    await expect(
      page.getByText("Password must be minimal 6 characters long.")
    ).toBeVisible();
  });
});
