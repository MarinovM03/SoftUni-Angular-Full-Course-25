import { Component, Input } from '@angular/core';
import { SimpleUser } from '../../types';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css'
})
export class UserItem {
  @Input('user') user: SimpleUser | null = null;
}
