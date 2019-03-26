import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent {
  todoList: string[] = [];

  onAddTodo(newTodo: string): void {
    this.todoList.push(newTodo);
  }

  onRemoveTodo(todo: string): void {
    const index = this.todoList.indexOf(todo);

    this.todoList.splice(index, 1);
  }
}
