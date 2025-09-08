# E-commerce Test Project

A Playwright test automation project for e-commerce functionality.

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test product.spec.ts

# View test report
npx playwright show-report
```

## Test Structure

- `tests/` - Test files
- `pages/` - Page Object Models
- `fixtures/` - Test fixtures and authentication setup
- `data/` - Test data factories