import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { UserItem } from './user-item/user-item';
import { SimpleUser } from '../types';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItem],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserList {
  @Input('users') usersList: SimpleUser[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  refreshList() {
    this.cd.detectChanges();
  }
}
