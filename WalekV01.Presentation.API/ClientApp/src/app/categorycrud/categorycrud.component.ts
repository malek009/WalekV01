import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Categories } from '../models/categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categorycrud',
  templateUrl: './categorycrud.component.html',
  styleUrls: ['./categorycrud.component.scss']
})
export class CategorycrudComponent implements OnInit {

  categories! : Categories[] ;
  categoriesSub! : Subscription;
  category! : Categories ;
  categoryToUpdate! : Categories | undefined;
  formAdd : boolean = false;
  ngForm! : FormGroup;
  submitted : boolean =  false;
  constructor(private categoriesService : CategoriesService,
    private formBuilder : FormBuilder,) { }

  ngOnInit(): void {
    this.loadData();
    this.ngForm = this.formBuilder.group({
      name : ['',Validators.required]
    });

  }

  onDelete(id : number | undefined) {
    if(id) {
      this.categoriesService.delete(id);
    }
  }
  get f() {
    return this.ngForm.controls;
  }
  showAddForm() {
    this.formAdd = true;
  }
  addCategories() {
    this.submitted = true ;
    if(this.ngForm.invalid) {
      return;
    }
    this.category = {
      name : this.f['name'].value
    }
    this.categoriesService.add(this.category);
    this.formAdd = false;
    this.loadData();
  }
  loadData () {
    this.categories   = [] ;
    this.categoriesSub = this.categoriesService.categoriesSubject.subscribe(
      (categories: Categories[]) => {
        this.categories = categories;
      }
    );
    this.categoriesService.getCategories();
  }


}
