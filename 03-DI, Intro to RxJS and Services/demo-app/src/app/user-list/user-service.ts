import { Injectable, OnDestroy } from '@angular/core';
import { SimpleUser } from '../types';

// @Injectable({
//   providedIn: 'root'  // Global!
// })

@Injectable()
export class UserService implements OnDestroy{
  appUsers: SimpleUser[] = [
    { name: 'Martin', age: 21},
    { name: 'Ivo', age: 34},
    { name: 'Peter', age: 42},
  ];

  constructor() {}

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
