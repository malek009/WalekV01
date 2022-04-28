import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-modal-edit-video',
  templateUrl: './modal-edit-video.component.html',
  styleUrls: ['./modal-edit-video.component.scss']
})
export class ModalEditVideoComponent implements OnInit {

  @Input()  id? : number;
  editVideoForm! : FormGroup ;
  video! : Video;
  videoSub! : Subscription;
  isSeries : boolean = false;
  submitted : boolean =  false;
  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private formBuilder : FormBuilder,
    private videoService : VideoService,
    private route : ActivatedRoute) {
      config.backdrop = 'static';
    config.keyboard = false;
    }

  ngOnInit(): void {

    this.editVideoForm = this.formBuilder.group({
      title : ['',Validators.required],
      description : ['',Validators.required],
      duration : ['',Validators.required],
      episode : [''],
      producer : ['',Validators.required],
      releaseDate : ['',Validators.required],
      imageUrl : ['',Validators.required]
    });

  }
  close () {
    this.modalService.dismissAll();

  }
  open(content : any) {
    this.isSeries = false;
    this.modalService.open(content);
    if (this.id){
      this.videoService.getVideoById(this.id);
    }
    this.videoSub = this.videoService.videoSubject.subscribe(
      (video: Video) => {
        this.f['episode'].setValue(null);
      this.video = video;
          this.video = video;
          if(this.video.episode != null) {
            this.isSeries = true;
            this.f['episode'].setValue(this.video.episode);
          }
          this.f['title'].setValue(this.video.title);
          this.f['description'].setValue(this.video.description);
          this.f['duration'].setValue(this.video.duration);
          this.f['producer'].setValue(this.video.producer);
          this.f['releaseDate'].setValue(this.video.releaseDate);
          this.f['imageUrl'].setValue(this.video.imageUrl);
      }
    );
  }
  get f() {
    return this.editVideoForm.controls;
  }
  onSubmit () {
    this.submitted = true ;
    if(this.editVideoForm.invalid) {
      return;
    }
    this.video = {
      id : this.id,
      title : this.f['title'].value,
      description : this.f['description'].value,
      duration : this.f['duration'].value,
      episode : this.f['episode'].value,
      producer : this.f['producer'].value,
      releaseDate : this.f['releaseDate'].value,
      imageUrl :  this.f['imageUrl'].value,
      categories : [] = [],
      genderId : this.video.genderId
    };
    this.videoService.update(this.video);
    this.modalService.dismissAll();
  }

}
