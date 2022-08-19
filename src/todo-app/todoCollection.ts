import { TodoItem } from './todoItem';

export class TodoCollection {
  private nextId: number = 1;
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todos: TodoItem[] = []) {
    todos.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodo(taskTitle: string): number {
    while (this.getById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, taskTitle));
    return this.nextId;
  }

  getById(id: number): TodoItem | undefined {
    return this.itemMap.get(id);
  }

  updateTodo(id: number, newStatus: boolean) {
    const todoItem = this.getById(id);
    todoItem && (todoItem.completed = newStatus);
  }
}
