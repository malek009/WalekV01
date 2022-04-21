import { Video } from "./video";

export interface VideoResult {
  PageNumber : number;
  PageSize : number;
  TotalItem : number;
  Items : Video[];

}

