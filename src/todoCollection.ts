import { TodoItem } from './todoItem';

export class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todos: TodoItem[] = []) {
    // no need
  }

  addTodo(taskTitle: string): number {
    while (this.getById(this.nextId)) {
      this.nextId++;
    }
    this.todos.push(new TodoItem(this.nextId, taskTitle));
    return this.nextId;
  }

  getById(id: number): TodoItem {
    return this.todos.find(item => item.id === id);
  }

  updateTodo(id: number, newStatus: boolean) {
    const todoItem = this.getById(id);
    todoItem && (todoItem.completed = newStatus);
  }
}
