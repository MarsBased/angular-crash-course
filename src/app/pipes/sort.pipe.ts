import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(todoList: string[]): string[] {
    return todoList.sort();
  }
}
