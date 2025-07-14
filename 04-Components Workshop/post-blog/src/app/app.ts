import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ref, get } from '@angular/fire/database';
import { FirebaseService } from './firebase-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [FirebaseService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'post-blog';

  constructor(private FirebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.serviceTest();
  }

  serviceTest() {
    this.FirebaseService.getAll().then((p) => {
      console.log(p);
      
    })
  }
}
