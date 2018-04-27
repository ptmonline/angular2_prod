import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceMock {
  constructor() { }

  getUsers(): Array<{}> {
      return [
          {
              name: 'user666',
              surname: 'usersurname1'
          }
      ];
  }
}