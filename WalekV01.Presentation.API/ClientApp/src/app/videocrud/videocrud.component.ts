import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-videocrud',
  templateUrl: './videocrud.component.html',
  styleUrls: ['./videocrud.component.scss']
})
export class VideocrudComponent implements OnInit {

  videos!: Video[] ;
  videoSub!: Subscription;
  constructor(private videoService : VideoService) { }

  ngOnInit(): void {
    this.videoSub = this.videoService.prodSubject.subscribe(
      (videos: Video[]) => {
        this.videos = videos;
      }
    );
    this.videoService.getVideoByPage(1,9);
  }

}
