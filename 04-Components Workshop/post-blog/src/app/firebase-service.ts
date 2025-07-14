import { Injectable } from '@angular/core';
import { Database, ref, get } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: Database) {

  }

  getAll() {
    return get(ref(this.db, 'post'));
  }
}
