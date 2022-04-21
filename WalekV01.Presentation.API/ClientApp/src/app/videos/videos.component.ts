import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos!: Video[] ;
  videoSub!: Subscription;
  numberTotalPage!: number;
  numberSubject!: Subscription;
  currentPage = 1;

  pages : number []= [1,2] ;


  constructor(private videoService : VideoService) { }

  ngOnInit(): void {

   /* let a = this.videoService.getNumberTotalPage();
    console.log(a);

    this.pages = Array(a).fill(1).map((x,i)=>i+1);
    console.log(this.pages);*/


    this.videoSub = this.videoService.prodSubject.subscribe(
      (videos: Video[]) => {
        this.videos = videos;
      }
    );
    this.videoService.getVideoByPage(this.currentPage,3);
  }

  changePage(numberPage: number): void{
    this.currentPage = numberPage;
    const video = this.videoService.getVideoByPage(this.currentPage,3);
       this.videos = video;
  }

  nextPage(): void{
    const newCurrentPage = this.currentPage +1;
    const video = this.videoService.getVideoByPage(newCurrentPage,3);
    if (video) {
      if(video.length){
        this.videos = video;
        this.currentPage = newCurrentPage;
      }
    }
  }

}
