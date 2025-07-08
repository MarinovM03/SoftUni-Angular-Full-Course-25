import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'demo-app';

  appUsers = [
    { name: 'Martin', age: 21},
    { name: 'Ivo', age: 34},
    { name: 'Peter', age: 42},
  ];

  handleClick() {
    this.title = 'New text';
  }
}
