import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos! :  Video [];
  videoSub!: Subscription;
  pages : number []= [];
  constructor(private videoService : VideoService ) {

  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.videoSub = this.videoService.videoSubject.subscribe(
      (data)=>{
        var test = this.videoService.getVideoByPage(0);
        if(test) {
          this.videos = test;
        }else {
          this.videos = [];
        };
    this.videoService.emitVideos();
  }


  );

}
}


