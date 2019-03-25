import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent {
  todo = '';

  onAddTodo(newTodo: string): void {
    this.todo = newTodo;
  }
}
