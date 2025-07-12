import { Component, Input, OnInit } from '@angular/core';
import { SimpleUser } from '../../types';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css'
})
export class UserItem implements OnInit{
  @Input('user') user: SimpleUser | null = null;

  constructor(private us: UserService) {}

  ngOnInit(): void {
    // console.log(this.user?.name + ' - ' + JSON.stringify(this.us.appUsers, null, 4));
  }
}
