import { test, expect } from '@playwright/test';

test('API request', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
  expect(response.ok()).toBeTruthy();
