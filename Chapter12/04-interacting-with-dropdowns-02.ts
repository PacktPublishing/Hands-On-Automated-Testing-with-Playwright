const toppingsDropdown = page.getByLabel('Toppings');

// Select multiple toppings by their values
await toppingsDropdown.selectOption([
  'pepperoni',
  'mushrooms',
  'onions'
]);

// Or by labels
await toppingsDropdown.selectOption([
  { label: 'Pepperoni' },
  { label: 'Mushrooms' },
  { label: 'Onions' }
]);
