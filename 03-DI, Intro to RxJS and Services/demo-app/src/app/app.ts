import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './user-list/user-list';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'demo-app';

  appUsers: SimpleUser[] = [
    { name: 'Martin', age: 21},
    { name: 'Ivo', age: 34},
    { name: 'Peter', age: 42},
  ];

  handleClick() {
    this.title = 'New text';
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };

    this.appUsers.push(user);
    // this.appUsers = [...this.appUsers, user];  //! Important `HACK` we can use

    inputName.value = '';
    inputAge.value = '';

    console.log(this.appUsers);
    
  }
}
