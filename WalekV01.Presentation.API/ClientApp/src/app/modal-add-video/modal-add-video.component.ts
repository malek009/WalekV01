import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-modal-add-video',
  templateUrl: './modal-add-video.component.html',
  styleUrls: ['./modal-add-video.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalAddVideoComponent implements OnInit {


  addVideoForm! : FormGroup ;
  video! : Video;
  submitted : boolean =  false;
  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private formBuilder : FormBuilder,
              private serviceVideo : VideoService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.addVideoForm = this.formBuilder.group({
      title : ['',Validators.required],
      description : ['',Validators.required],
      duration : ['',Validators.required],
      producer : ['',Validators.required],
      releaseDate : ['',Validators.required],
      imageUrl : ['',Validators.required]
    })
  }
  open(content : any) {
    this.modalService.open(content);
  }
  get f() {
    return this.addVideoForm.controls;
  }
  onSubmit () {
    this.submitted = true ;
    if(this.addVideoForm.invalid) {
      return;
    }
    this.video = {
      title : this.f['title'].value,
      description : this.f['description'].value,
      duration : this.f['duration'].value,
      producer : this.f['producer'].value,
      releaseDate : this.f['releaseDate'].value,
      imageUrl : "../assets/img/"+ this.f['imageUrl'].value,
      categories : [] = [],
      genderId : 1
    }
    console.log(this.video);
    this.serviceVideo.add(this.video);
    this.modalService.dismissAll();
  }

}
