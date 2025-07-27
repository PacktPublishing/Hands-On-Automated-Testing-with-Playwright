:: Fast unit tests (50 files, short)
npx playwright test tests/unit --workers=8

:: Slow E2E tests (5–10 files, longer)
npx playwright test tests/e2e --workers=2