import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appCustomDateFormat' })
export class CustomDateFormatPipe implements PipeTransform {
  transform(date: Date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
