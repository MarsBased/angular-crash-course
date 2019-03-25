import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input()
  data: string;

  @Output()
  editInput = new EventEmitter<string>();

  onClickSendData(): void {
    this.editInput.emit(this.data);
  }
}
