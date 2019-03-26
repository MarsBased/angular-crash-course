import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ColorDirective } from './directives/color.directive';
import { ClickDirective } from './directives/alert.directive';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    HeaderComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,

    // Directives
    ColorDirective,
    ClickDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
