import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header";
import { FooterComponent } from './core/footer/footer';
import { MainComponent } from './main/main';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'postblog';


  ngOnInit(): void {
    // this.http
    //   .get('https://angular-workshop-postblog-default-rtdb.europe-west1.firebasedatabase.app/product/.json')
    //   .subscribe((x) => {
    //     console.log(x);
    //   });
  }
}
