import { Video } from "./video";

export interface Result {
  pageSize : number,
  pageNumber : number,
  totalItem : number,
  totalNumberPage : number,
  items : Video[]
}
