await page.evaluate((date) => {
  const input = document.querySelector('#date-picker-input');
  input.value = date;
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
}, '2025-08-08');
