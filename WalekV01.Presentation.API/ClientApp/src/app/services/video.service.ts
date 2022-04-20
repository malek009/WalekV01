import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videoSubject = new Subject<Video[]>();
  videos : Video[] = [];

  numberOfProductByPage : number =  3;
  //numberOfPages! : number;

  url : string = "https://localhost:44347/api/Video/";
  constructor(private http: HttpClient) {
    this.getVideoFromServer();
  }


  emitVideos(): void{
    this.videoSubject.next(this.videos);

  }

  getVideoFromServer(): void {
    this.http.get(this.url+"GetAll").subscribe(
      (dataVideos)=>{
          this.videos = dataVideos as Video[];
          this.emitVideos();
      }
    )
  }

  getVideoById(id: number): Video | null{
    const video = this.videos.find(element => element.id == id);
    if(video){
      return video;
    }else{
      return null;
    }
  }

  getVideoByPage(numberPage: number): Video[] | null{
    const numberOfPage = this.videos.length/this.numberOfProductByPage;
    if( numberPage >0 || numberPage < numberOfPage ){
      const videoResult = this.videos.slice(numberPage*this.numberOfProductByPage, (numberPage+1)*this.numberOfProductByPage);
      return videoResult;
    }
    return null;
  }

  }
