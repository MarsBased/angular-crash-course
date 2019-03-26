import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input()
  data: string;
  @Output()
  removeTodo = new EventEmitter<void>();

  remove(): void {
    this.removeTodo.emit();
  }
}
