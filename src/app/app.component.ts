import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue = 'Initial value';
  username: string;

  constructor(private usersService: UsersService) {
    this.username = this.usersService.getCurrentUser();
  }

  onEditInput(newInputValue: string): void {
    this.inputValue = newInputValue;
  }
}
