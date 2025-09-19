// fixtures/console.fixture.ts
import { test as base, expect } from '@playwright/test';

/**
* Checks for console logs on page load
*/
export const test = base.extend({
  noConsoleErrors: async ({ page }, use) => {
    const consoleErrors = [];

    // Set up a listener for the 'console' event.
    page.on('console', msg => {
      // Check if the message type is 'error'.
      if (msg.type() === 'error') {
        consoleErrors.push('\n' + msg.text());
      }
    });

    // Use the fixture in the test. The test code will run here.
    await use();

    // After the test, assert that no console errors were logged.
    // This part is the "teardown" of the fixture.
    expect(consoleErrors, `Unexpected console errors: ${consoleErrors.join()}`).toHaveLength(0);
  },
});
