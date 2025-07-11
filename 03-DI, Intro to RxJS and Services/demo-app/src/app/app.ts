import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './user-list/user-list';
import { SimpleUser } from './types';
import { UserService } from './user-list/user-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserList],
  // providers: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'demo-app';

  constructor(public userService: UserService) {

  }

  handleClick() {
    this.title = 'New text';

  }
}
