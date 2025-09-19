import { type Page, type Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly clearCompletedButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.locator('input.new-todo');
    this.todoItems = page.locator('ul.todo-list li');
    this.clearCompletedButton = page.locator('button.clear-completed');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async toggleTodo(index: number) {
    await this.todoItems.nth(index).locator('input.toggle').check();
  }

  async clearCompleted() {
    await this.clearCompletedButton.click();
  }
}
