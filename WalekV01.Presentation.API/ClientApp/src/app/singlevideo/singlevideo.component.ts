import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video';
import { Subscription } from 'rxjs';
import { Categories } from '../models/categories';

@Component({
  selector: 'app-singlevideo',
  templateUrl: './singlevideo.component.html',
  styleUrls: ['./singlevideo.component.scss']
})
export class SinglevideoComponent implements OnInit {

  video! : Video;
  videoSub! : Subscription;
  isSerie : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    const id = +this.route.snapshot.params["id"];
    this.isSerie = false;

    this.video = this.videoService.getVideoById(id);

    this.videoSub = this.videoService.videoSubject.subscribe(
      (video: Video) => {
      this.video = video;
        if(this.video.episode != null) {
        this.isSerie = true;
        }
      }
    );
  }

}
