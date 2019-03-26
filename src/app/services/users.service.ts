import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  getCurrentUser(): string {
    return 'David';
  }
}
