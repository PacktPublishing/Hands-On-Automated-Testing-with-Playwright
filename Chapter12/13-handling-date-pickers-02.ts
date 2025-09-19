// Open the date picker
await page.click('#date-picker-input');

// Wait for the calendar to appear
await page.toBeVisible('.calendar');

// Select year (dropdown)
await page.selectOption('.year-dropdown', '2025');

// Select month (clicking a month button)
await page.click('.month-selector[data-month="August"]');

// Select day
await page.click('.day-selector[data-day="8"]');
