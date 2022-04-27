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
    this.loadData();
  }
  onEdit(id? : number) {

  }
  onDelete(id : number | undefined) {
    if(id) {
      this.videoService.delete(id);
      this.videoService.getVideoByPage(1,200);
    }
  }
  loadData() {
    this.videoSub = this.videoService.videosSubject.subscribe(
      (videos: Video[]) => {
        this.videos = videos;
        console.log(this.videos);

      }
    );
    this.videoService.getAllVideo();
  }
}
