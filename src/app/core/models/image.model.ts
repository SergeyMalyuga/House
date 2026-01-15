import {ImageResolutions} from './image-resolutions.model';

export interface Image {
  id: string;
  author: string;
  name: string;
  description: string;
  price: number;
  images: ImageResolutions;
}
