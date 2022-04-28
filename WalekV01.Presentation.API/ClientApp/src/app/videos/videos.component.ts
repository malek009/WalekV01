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
  numberTotalItems! : number;
  numberTotalPage!: number;
  numberSubject!: Subscription;
  currentPage = 1;
  pages : number [] = [];


  constructor(private videoService : VideoService) { }

  ngOnInit(): void {

    this.videoService.getVideoByPage(this.currentPage,5);
    this.videoSub = this.videoService.videosSubject.subscribe(
      (videos: Video[]) => {
        this.videos = videos;
      }
    );




    this.videoService.getNumberTotoalItems();
    this.numberSubject = this.videoService.numberSubject.subscribe(
      (number: number) => {
        this.numberTotalItems = number;
        this.numberTotalPage = Math.ceil(this.numberTotalItems/5);
        for (let i = 0; i < this.numberTotalPage; i++) {
          this.pages.push(i+1);
        }
      });
  }

  changePage(numberPage: number): void{
    this.currentPage = numberPage;
    const video = this.videoService.getVideoByPage(this.currentPage,5);
    this.videos = video;
  }

  nextPage(): void{
    const newCurrentPage = this.currentPage +1;
    const video = this.videoService.getVideoByPage(newCurrentPage,5);
    if (video) {
      if(video.length){
        this.videos = video;
        this.currentPage = newCurrentPage;
      }
    }
  }

}
