import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = "https://localhost:44347/api/User/CreateForUser";
  constructor(private http: HttpClient) { }

  add(user : User)  {
    this.http.post<User>(this.url,user).subscribe(data => {
    console.log(data);
    });
  }
  get() {
    return this.http.get<User[]>("https://localhost:44347/api/User/GetAll").subscribe(data => {
      console.log(data);
    });
  }

}
