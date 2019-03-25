import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output()
  addTodo = new EventEmitter<string>();

  newTodo = '';

  add(): void {
    this.addTodo.emit(this.newTodo);
  }
}
