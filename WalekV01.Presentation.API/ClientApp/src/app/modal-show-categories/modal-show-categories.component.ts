import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Categories } from '../models/categories';
import { VideoService } from '../services/video.service';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'app-modal-show-categories',
  templateUrl: './modal-show-categories.component.html',
  styleUrls: ['./modal-show-categories.component.scss']
})
export class ModalShowCategoriesComponent implements OnInit {

  @Input()  id? : number;
  categories! : Categories[] ;
  categoriesSub! : Subscription;
  showCategorieAdd : boolean = false;
  listeCategories: any[]= [];
  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private categoriesService : CategoriesService,
    private videoService : VideoService) {
      config.backdrop = 'static';
    config.keyboard = false;
    }

    open(content : any) {
      this.modalService.open(content);
    }
    close() {
      this.loadData();
    }
  ngOnInit(): void {
    this.loadData();
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

  addCategories( nom? : string) {
    this.listeCategories.push(nom);
    this.showCategorieAdd = true;
  }
  addCategoriesToVideo(id? : number) {
    if(id && this.id) {
      this.videoService.addCategoriesToVideo(id,this.id);
    }
  }

}
