import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserItem } from './user-item/user-item';
import { SimpleUser } from '../types';
import { UserService } from './user-service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItem],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserList implements OnChanges {
  @Input('users') usersList: SimpleUser[] = [];

  constructor(private cd: ChangeDetectorRef, private us: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    
  }

  refreshList() {
    // console.log(this.us.appUsers);
    this.cd.detectChanges();
  }
}
