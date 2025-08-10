await page.evaluate((date) => {
  document.querySelector('#date-picker-input').value = date;

  // trigger change event
  const event = new Event('change', { bubbles: true });
  document.querySelector('#date-picker-input').dispatchEvent(event);
}, '2025-08-08');
