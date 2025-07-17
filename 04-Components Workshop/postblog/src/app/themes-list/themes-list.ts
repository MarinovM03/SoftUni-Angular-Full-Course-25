import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { Theme } from '../types/themes';

@Component({
  selector: 'app-themes-list',
  imports: [],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css'
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes;
    });
  }
}
