import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('should add and complete a todo', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();
  await todoPage.addTodo('Buy groceries');
  await expect(todoPage.todoItems).toHaveCount(1);
  await todoPage.toggleTodo(0);
  await todoPage.clearCompleted();
  await expect(todoPage.todoItems).toHaveCount(0);
});
