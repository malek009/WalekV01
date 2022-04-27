import { Categories } from './categories';
import { VideoCategories } from './video-categories';
export interface Video {
    id?: number;
    title: string;
    description: string;
    duration: number;
    episode? : number;
    producer : string;
    releaseDate : Date;
    imageUrl: string;
    categories: VideoCategories[];
    genderId? : number;
}
