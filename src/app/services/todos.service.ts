import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {
  getTodos(): string[] {
    return ['Todo 3', 'Todo 1', 'Todo 2'];
  }
}
