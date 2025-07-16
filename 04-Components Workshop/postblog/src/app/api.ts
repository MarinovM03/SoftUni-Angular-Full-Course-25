import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Post } from './types/post';
import { Theme } from './types/themes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    const { apiUrl } = environment;
    return this.http.get<Post>(`${apiUrl}/posts`);
  }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes`);
  }
}
