import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user!: User | null;

  constructor() {
    this.load();
   }

  load () {
    const user = JSON.parse(localStorage.getItem('currentUser')?? '{}');
    Object.keys(user).length ? this.user = user : this.user = null;
    return this.user;
  }
}
