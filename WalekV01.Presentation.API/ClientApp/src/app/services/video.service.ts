import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Video } from '../models/video';
import { VideoResult } from '../models/videoResult';
import { ConnectedUser } from '../models/connected-user';
import { Result } from '../models/result';
import { VideoCategories } from '../models/video-categories';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videos! : Video[] ;
  video! : Video;
  videosSubject = new Subject<Video[]>();
  videoSubject = new Subject<Video>();
  numberSubject = new Subject<number>();
  totalItem! : number;
  result !: Video;

  numberTotalPage! : number;
  pageNumbre! : number;
  pageSize!:  number;

  url : string = "https://localhost:44347/api/Video/";
  urlget : string = 'https://localhost:44347/api/Video/Find?pageNumber='+''+'&pageSize='+'';

  user!: ConnectedUser | null;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('currentUser')?? '{}');
  }

  delete (id : number) {
   return this.http.delete(this.url+"Delete?videoId="+id).subscribe(data => {
   });
  }

  add(video : Video)  {
    console.log(this.user);
    this.http.post<Video>(this.url+"Create",video,{headers: new HttpHeaders({
      'Content-type':'application/json',
      'Authorization' : `Bearer ${this.user?.token}`
    })}).subscribe(data => {
        console.log("data " + data);
      });
    }
    addCategoriesToVideo (categoriesId : number, videoId : number) {
      const videoCategories = {
        videoId: videoId,
        categoriesId: categoriesId
      };
      this.http.post<VideoCategories>(this.url+"AddCategoryToVideo",videoCategories,{headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' : `Bearer ${this.user?.token}`
      })}).subscribe(data => {
        console.log( data);

        });
    }


  getVideoById(id : number) : Video {
     this.http.get<Video>(this.url+"GetById?id="+id).subscribe(
      (result : Video)=>{
          this.video = result ;
          this.videoSubject.next(this.video);
      }
    );
    return this.video;
  }

  emitVideo(): void{
    this.videosSubject.next(this.videos);
  }

  getNumberTotoalItems() : number {
    this.http.get<Result>(this.url+'Find?pageNumber=1&pageSize=1'
    ).subscribe(result => {
      this.totalItem = result.totalItem;
      this.numberSubject.next(this.totalItem);
    });
    return this.totalItem;
  }



  getVideoByPage(numberPage: number, pageSize: number) : Video[] {
    this.http.get<Result>('https://localhost:44347/api/Video/Find?pageNumber='+numberPage+'&pageSize='+pageSize,
    {headers: new HttpHeaders({
      'Content-type':'application/json',
      'Authorization' : `Bearer ${this.user?.token}`,
    })}
    ).subscribe(result => {
      this.videos = result.items;
      this.emitVideo();
    });
    return this.videos;
  }

  getAllVideo() : Video[] {
    this.http.get<Video[]>(this.url+"GetAll").subscribe(
      (result : Video[])=>{
        this.videos = result ;
        this.emitVideo();
      }
    );
    return this.videos;
  }
}
