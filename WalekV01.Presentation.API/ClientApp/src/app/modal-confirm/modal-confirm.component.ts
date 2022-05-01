import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  @Input()  id? : number;
  constructor( config: NgbModalConfig,
              private modalService: NgbModal,
              private videoService : VideoService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }
  open(content : any) {
    this.modalService.open(content);
  }
  close() {
    this.modalService.dismissAll();
  }
  delete() {
    if(this.id){
      this.videoService.delete(this.id);
    }
  }
}
