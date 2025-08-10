const countryDropdown = page.getByLabel('Country');

// Select by value ('DE' for Germany)
await countryDropdown.selectOption('DE');

// Select by label (visible text)
await countryDropdown.selectOption({ label: 'United Kingdom' });

// Select by index
await countryDropdown.selectOption({ index: 2 });
