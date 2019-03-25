import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue = 'Initial value';

  onEditInput(newInputValue: string): void {
    this.inputValue = newInputValue;
  }
}
