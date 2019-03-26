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
import { CustomDateFormatPipe } from './pipes/date.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UsersService } from './services/users.service';
import { TodosService } from './services/todos.service';

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
    ClickDirective,

    // Pipes
    CustomDateFormatPipe,
    SortPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UsersService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
