import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { Post } from '../types/post';
import { LoaderComponent } from '../shared/loader/loader';

@Component({
  selector: 'app-posts-list',
  imports: [LoaderComponent],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe((posts) => {
      this.posts = posts;
      this.isLoading = false;
    });
  }
}
