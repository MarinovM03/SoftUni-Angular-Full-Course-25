import { Injectable, OnDestroy } from '@angular/core';
import { SimpleUser } from '../types';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'  // Global!
// })

@Injectable()
export class UserService implements OnDestroy{
  URL = 'https://jsonplaceholder.typicode.com/users';
  appUsers: SimpleUser[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    return fetch(this.URL).then((res) => res.json());
    // return this.http.get(this.URL);
  }

  ngOnDestroy(): void {
    // Unsubscribe from events
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
