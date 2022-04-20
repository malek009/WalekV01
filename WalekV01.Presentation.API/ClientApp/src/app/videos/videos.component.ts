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

  @Input() videos: Video[] = [];
  @Input() isPaginate: boolean = true;
  videoSub!: Subscription;
  currentPage = 0;
  pages : number []= [0,1];

  categories! : any[];

  constructor(private videoService : VideoService) { }

  ngOnInit(): void {


  }

  changePage(numberPage: number): void{
    const video = this.videoService.getVideoByPage(numberPage);
    if(video){
      if(video.length){
       this.videos = video;
       this.currentPage = numberPage;
      }
    }
  }

  nextPage(): void{
    const newCurrentPage = this.currentPage +1;
    const video = this.videoService.getVideoByPage(newCurrentPage);
    if (video) {
      if(video.length){
        this.videos = video;
        this.currentPage = newCurrentPage;
      }
    }
  }

  prevPage(): void{
    const newCurrentPage = this.currentPage -1;
    const video = this.videoService.getVideoByPage(newCurrentPage);
    if(video){
      if(video.length){
        this.videos = video;
        this.currentPage = newCurrentPage;
      }
    }
  }


}
