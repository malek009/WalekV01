import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Categories } from '../models/categories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories! : Categories[];
  category! : Categories;
  categoriesSubject = new Subject<Categories[]>();
  categorySubject = new Subject<Categories>();
  url : string = "https://localhost:44347/api/Categories/";
  constructor(private http : HttpClient) { }


  getCategories() : Categories[] {
    this.http.get<Categories[]>(this.url+"GetAll").subscribe(
      (result : Categories[])=>{
        this.categories = result ;
        this.categoriesSubject.next(this.categories);
      }
    );
    return this.categories;
  }
  add(category : Categories) : Categories {
    this.http.post<Categories>(this.url+"Create",category).subscribe(
      (result : Categories)=>{
        this.category = result ;
        this.categorySubject.next(this.category);
      }
    );
    return this.category;
  }
}

