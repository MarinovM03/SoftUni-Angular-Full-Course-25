import { Component } from '@angular/core';
import { ThemesListComponent } from './themes-list/themes-list';
import { PostsListComponent } from './posts-list/posts-list';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ThemesListComponent,
    PostsListComponent
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent {

}
