import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  today: Date;
  subtitle: string;

  constructor() {
    this.today = new Date();
    this.subtitle = 'Todo List';
  }

  get formattedDate(): string {
    return `${this.today.getDate()}/${this.today.getMonth() +
      1}/${this.today.getFullYear()}`;
  }
}
