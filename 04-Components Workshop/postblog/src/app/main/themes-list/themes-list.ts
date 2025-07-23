import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api';
import { Theme } from '../../types/themes';
import { LoaderComponent } from '../../shared/loader/loader';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css'
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];

  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes;
      this.isLoading = false;
    });
  }
}
