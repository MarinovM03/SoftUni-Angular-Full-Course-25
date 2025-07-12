import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './user-list/user-list';
import { SimpleUser } from './types';
import { UserService } from './user-list/user-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserList],
  providers: [UserService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit{
  protected title = 'demo-app';

  users: SimpleUser[] = [];


  constructor(private userService: UserService) {
    this.users = this.userService.appUsers;
  }

  ngOnInit() {
    this.userService.getUsers().then((users) => {
      this.users = users;
    });
  }

  handleClick() {
    this.title = 'New text';
  }

  addSimpleUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // Validate input
    this.userService.addUser(inputName, inputAge);
  }
}
