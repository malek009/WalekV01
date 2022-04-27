import { Categories } from './categories';
export interface VideoCategories {
  id? : number;
  videoid : number;
  categoriesid : number;
  categories : Categories;
}
