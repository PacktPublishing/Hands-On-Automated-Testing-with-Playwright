// ./tests/bulk.spec.ts
import { test, expect } from "@playwright/test";
import { createUsers } from "../data/factory";
import { RegistrationPage } from "../pages/registration.page";

test.describe("Load test", () => {
  test("bulk user registration", async ({ browser }) => {
    // Generate 3 users for simulation. Adjust as needed.
    const users = createUsers(3);

    const registrations = users.map(async (user) => {
      let context;
      try {
        context = await browser.newContext();
        const page = await context.newPage();
        const registrationPage = new RegistrationPage(page);

        await registrationPage.goto();
        await registrationPage.firstNameInput.fill(user.firstName);
        await registrationPage.lastNameInput.fill(user.lastName);
        await registrationPage.dobInput.fill(user.dob);
        await registrationPage.streetInput.fill(user.streetAddress);
        await registrationPage.postalCodeInput.fill(user.zip);
        await registrationPage.cityInput.fill(user.city);
        await registrationPage.stateInput.fill(user.state);
        await registrationPage.countrySelect.selectOption({
          label: user.country,
        });
        await registrationPage.phoneInput.fill(user.phone);
        await registrationPage.emailInput.fill(user.email);
        await registrationPage.passwordInput.fill(user.password);
        await registrationPage.submitRegistration();

        console.log(
          `Registering ${user.firstName} ${user.lastName} concurrently...`
        );

        // Expect success

        await expect(page).toHaveURL(/auth\/login/);
      } finally {
        await context.close();
      }
    });

    await Promise.all(registrations);
  });
});
