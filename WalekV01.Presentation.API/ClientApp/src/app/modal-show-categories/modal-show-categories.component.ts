import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Categories } from '../models/categories';
import { VideoService } from '../services/video.service';
import { CategoriesService } from '../services/categories.service';
import { VideoCategories } from '../models/video-categories';
import { Video } from '../models/video';
@Component({
  selector: 'app-modal-show-categories',
  templateUrl: './modal-show-categories.component.html',
  styleUrls: ['./modal-show-categories.component.scss']
})
export class ModalShowCategoriesComponent implements OnInit {

  @Input()  id? : number;
  categories! : Categories[] ;
  categoriesSub! : Subscription;
  VideoCategories! : VideoCategories[] ;
  VideoSub! : Subscription;
  video! : Video;
  showCategorieAdd : boolean = false;
  showCategorieRemove : boolean = false;
  listeCategoriesToAdd: any[]= [];
  listeCategoriesIdToAdd : any[] = [];
  listeCategoriesToRemove : any[] = [];
  listeCategoriesIdToRemove : any[] = [];

  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private categoriesService : CategoriesService,
    private videoService : VideoService) {
      config.backdrop = 'static';
    config.keyboard = false;
    }

    open(content : any) {
      this.modalService.open(content);
      this.loadData();
      this.loadCategories();
    }
    close() {
    this.modalService.dismissAll();
    if(this.listeCategoriesIdToAdd.length > 0) {
      this.listeCategoriesIdToAdd.map(id => {
        this.addCategoriesToVideo(id);
      });
    }
    if(this.listeCategoriesIdToRemove.length > 0) {
      this.listeCategoriesIdToRemove.map(id => {
        this.deleteCategoriesFromVideo(id);
      });
    }


    }
  ngOnInit(): void {
  }

  loadData () {
    this.categories   = [] ;
    this.categoriesSub = this.categoriesService.categoriesSubject.subscribe(
      (categories: Categories[]) => {
        this.categories = categories;
        console.log(this.categories);
      }
    );
    this.categoriesService.getCategories();
  }
  loadCategories() {
    this.VideoCategories  = [] ;
    if(this.id) {
    this.videoService.getVideoById(this.id);
    }
    this.VideoSub = this.videoService.videoSubject.subscribe(
      (video: Video) => {
      this.video = video;
        this.VideoCategories = this.video.categories;
      console.log(this.VideoCategories);
      }
    );
  }

  addCategories( nom? : string, id? : number) {
    this.listeCategoriesToAdd.push(nom);
    this.listeCategoriesIdToAdd.push(id);
    this.showCategorieAdd = true;
  }

  addCategoriesToVideo(id? : number) {
    if(id && this.id) {
      this.videoService.addCategoriesToVideo(id,this.id);
    }
  }


  removeCategories(nom? : string, id? : number) {
    this.listeCategoriesToRemove.push(nom);
    this.listeCategoriesIdToRemove.push(id);
    this.showCategorieRemove = true;
  }

  deleteCategoriesFromVideo(id? : number) {
    if(id) {
      this.videoService.deleteCategoriesFromVideo(id);
    }
  }

}
