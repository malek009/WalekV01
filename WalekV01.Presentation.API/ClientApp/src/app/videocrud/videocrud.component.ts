import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
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
  constructor(private videoService : VideoService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.loadData();
    this.primengConfig.ripple = true;
  }
  loadData() {
    this.videoSub = this.videoService.videosSubject.subscribe(
      (videos: Video[]) => {
        this.videos = videos;
      }
    );
    this.videoService.getAllVideo();
  }
  confirm(event: Event,id : number | undefined ) {
    if(event.target) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted"
        });
        if(id){
          this.videoService.delete(id);
        }
        console.log('accept');

      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected"
        });
        console.log('reject');

      }
    });
  }
}
}
