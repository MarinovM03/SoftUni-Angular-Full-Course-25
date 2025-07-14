import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsListComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((p) => {
      console.log(p);
    });
  }
}
