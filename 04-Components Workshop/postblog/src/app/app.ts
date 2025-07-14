import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header";
import { FooterComponent } from './core/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'postblog';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http
    //   .get('https://angular-workshop-postblog-default-rtdb.europe-west1.firebasedatabase.app/product/.json')
    //   .subscribe((x) => {
    //     console.log(x);
    //   });
  }
}
