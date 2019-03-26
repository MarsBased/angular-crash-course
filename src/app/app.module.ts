import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { LoginComponent } from './components/login/login.component';
import { PostsService } from './services/posts.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    HeaderComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,
    LoginComponent,
    PostListComponent,

    // Directives
    ColorDirective,
    ClickDirective,

    // Pipes
    CustomDateFormatPipe,
    SortPipe
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [UsersService, TodosService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
