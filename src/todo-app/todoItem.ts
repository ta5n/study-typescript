export class TodoItem {
  constructor(public id: number, public task: string, public completed: boolean = false) {
    // no need
  }

  printDetails(): void {
    console.log(`${this.id}\t${this.task} ${this.completed ? '\t(done)' : ''}`);
  }
}
