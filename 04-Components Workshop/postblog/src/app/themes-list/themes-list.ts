import { Component } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-themes-list',
  imports: [],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css'
})
export class ThemesListComponent {
  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getThemes().subscribe((t) => {
      console.log(t);
    });
  }
}
