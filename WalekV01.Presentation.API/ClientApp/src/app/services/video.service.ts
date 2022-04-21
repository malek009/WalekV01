import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Video } from '../models/video';
import { VideoResult } from '../models/videoResult';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos! : Video[] ;
  prodSubject = new Subject<Video[]>();
  numberSubject = new Subject<number>();

  result : any;
  numberTotalPage! : number;

  pageNumbre! : number;
  pageSize!:  number;
  url : string = "https://localhost:44347/api/Video/";
  urlget : string = 'https://localhost:44347/api/Video/Find?pageNumber='+''+'&pageSize='+'';
  constructor(private http: HttpClient) {
  }

  getNumberTotalPage() : number {

    this.http.get('https://localhost:44347/api/Video/Find?pageNumber='+''+'&pageSize='+'').subscribe(
      (dataVideos)=>{
          this.result = dataVideos ;
          this.numberTotalPage =  this.result.totalNumberPage;
          this.numberSubject.next(this.numberTotalPage);
          console.log(this.numberTotalPage);
      }
    )
    return this.numberTotalPage;
  }


  getVideoByPage(numberPage: number, pageSize: number) : Video[] {
    this.http.get('https://localhost:44347/api/Video/Find?pageNumber='+numberPage+'&pageSize='+pageSize).subscribe(
      (dataVideos)=>{
          this.result = dataVideos ;
          this.videos = this.result.items;
          this.numberTotalPage =  this.result.totalNumberPage;
          this.prodSubject.next(this.videos);
      }
    )
    return this.videos;
  }
}
