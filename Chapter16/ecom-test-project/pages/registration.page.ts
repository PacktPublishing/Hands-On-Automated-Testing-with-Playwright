// ./pages/registration.page.ts
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class RegistrationPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly dobInput: Locator;
  readonly streetInput: Locator;
  readonly postalCodeInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly countrySelect: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerSubmitButton: Locator;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = page.getByTestId("first-name");
    this.lastNameInput = page.getByTestId("last-name");
    this.dobInput = page.getByTestId("dob");
    this.streetInput = page.getByTestId("street");
    this.postalCodeInput = page.getByTestId("postal_code");
    this.cityInput = page.getByTestId("city");
    this.stateInput = page.getByTestId("state");
    this.countrySelect = page.getByTestId("country");
    this.phoneInput = page.getByTestId("phone");
    this.emailInput = page.getByTestId("email");
    this.passwordInput = page.getByTestId("password");
    this.registerSubmitButton = page.getByTestId("register-submit");
  }

  async goto() {
    await this.page.goto("/auth/register");
  }

  async fillPersonalInfo(firstName: string, lastName: string, dob: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.dobInput.fill(dob);
  }

  async fillAddressInfo(
    streetAddress: string,
    postalCode: string,
    city: string,
    state: string,
    country: string
  ) {
    await this.streetInput.fill(streetAddress);
    await this.postalCodeInput.fill(postalCode);
    await this.cityInput.fill(city);
    await this.stateInput.fill(state);
    await this.countrySelect.selectOption({ label: country });
  }

  async fillContactInfo(phone: string, email: string) {
    await this.phoneInput.fill(phone || "");
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submitRegistration() {
    await this.registerSubmitButton.click();
  }

  // Complete registration method that accepts a user object
  async registerUser(user: {
    firstName: string;
    lastName: string;
    dob: string;
    streetAddress: string;
    zip: string;
    city: string;
    state: string;
    country: string;
    phone?: string;
    email: string;
    password: string;
  }) {
    await this.fillPersonalInfo(user.firstName, user.lastName, user.dob);
    await this.fillAddressInfo(
      user.streetAddress,
      user.zip,
      user.city,
      user.state,
      user.country
    );
    await this.fillContactInfo(user.phone || "", user.email);
    await this.fillPassword(user.password);
    await this.submitRegistration();
  }
}
