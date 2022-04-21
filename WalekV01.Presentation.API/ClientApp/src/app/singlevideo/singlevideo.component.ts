import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-singlevideo',
  templateUrl: './singlevideo.component.html',
  styleUrls: ['./singlevideo.component.scss']
})
export class SinglevideoComponent implements OnInit {

  video! : Video;
  videoSub! : Subscription;
  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    const id = +this.route.snapshot.params["id"];
    /*this.videoSub = this.videoService.videoSubject.subscribe(
      (data: Video[])=>{
        var dataVideo = this.videoService.getVideoById(id);
        if(dataVideo) {
          this.video = dataVideo;
        }

      }
    );
    this.videoService.emitVideos();*/
   // this.videoService.getById(id).subscribe(  video => {  this.video = video;
   //   console.log(this.video); });
  }

}
