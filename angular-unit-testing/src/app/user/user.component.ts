import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent {
  text = 'user page';
  users;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}