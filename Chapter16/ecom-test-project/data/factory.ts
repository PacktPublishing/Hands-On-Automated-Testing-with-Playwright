// ./data/factory.ts
import { faker } from "@faker-js/faker";

/**
 * Creates a user object with randomly generated fake data using Faker.js.
 * Allows customization through optional overrides parameter.
 * @param overrides - Optional object to override default generated values
 * @returns User object with firstName, lastName, email, password, address, city, state, zip, and country properties
 */
export function createUser(overrides = {}) {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10, prefix: "#1Aa" }),
    streetAddress: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode("#####"),
    country: "United States of America (the)", // Toolshop requires specific countries
    phone: faker.string.numeric(10),
    dob: createDOB({ min: 18, max: 80 }),
  };
}

/**
 * Creates an array of user objects.
 * @param {number} count - Number of users to generate
 * @returns {Array<object>} Array of user objects
 */
export function createUsers(count: number) {
  return Array.from({ length: count }, () => createUser());
}

/**
 * Creates an invalid user object with empty name, invalid date of birth format, and too short password.
 * @returns {object} An object with invalid user data
 */
export function createInvalidUser() {
  return {
    firstName: "", // Empty name
    dob: "1900", // Invalid format
    password: "123", // Too short
  };
}

/**
 * Generates a date of birth string in ISO format (YYYY-MM-DD) based on the specified age range.
 *
 * @param {Object} ageRange - The age range constraints for the date of birth.
 * @param {number} ageRange.min - The minimum age in years.
 * @param {number} ageRange.max - The maximum age in years.
 * @returns {string} The date of birth in ISO format (YYYY-MM-DD).
 *
 * @example
 * // Generate a date of birth for someone between 18 and 65 years old
 * const dob = createDOB({ min: 18, max: 65 });
 * // Returns something like "1985-03-21"
 */
export function createDOB(ageRange: { min: number; max: number }) {
  return faker.date
    .birthdate({ min: ageRange.min, max: ageRange.max, mode: "age" })
    .toISOString()
    .split("T")[0];
}

export function createEdgeCaseUser() {
  return {
    ...createUser(),
    firstName: faker.string.alpha({ length: 50 }),
    email: `test+${faker.string.alphanumeric(100)}@test.com`,
  };
}
