import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actors! : Actor[];
  actor! : Actor;
  actorsSubject = new Subject<Actor[]>();
  actorSubject = new Subject<Actor>();
  url : string = "https://localhost:44347/api/Actor/";
  constructor(private http : HttpClient) { }


  getCategories() : Actor[] {
    this.http.get<Actor[]>(this.url).subscribe(
      (result : Actor[])=>{
        this.actors = result ;
        this.actorsSubject.next(this.actors);
      }
    );
    return this.actors;
  }
}
