import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectedUser } from '../models/connected-user';
import { Credentials } from '../models/credentials';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currebtUserSubject! : BehaviorSubject<ConnectedUser>;
  url : string = "https://localhost:44347/api/Auth";
  constructor(@Inject(HttpClient) private http : HttpClient,private currentUser : CurrentUserService) {
    this.currebtUserSubject = new BehaviorSubject<ConnectedUser>(
    JSON.parse(localStorage.getItem('currentUser')?? '{}'));
   }

   login(password : string , username:string) {
    const credentials = new Credentials (password,username);
    this.http.post<ConnectedUser>(this.url,credentials).subscribe(
      result => {
        console.log("je suis logé");
        localStorage.setItem("currentUser", JSON.stringify(result));
        this.currebtUserSubject.next(result);
        this.currentUser.load();
      },error => console.log(error));
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser.load();
  }
}
