import { ImageResolutions } from './image-resolutions.model';

export interface Product {
  id: string;
  author: string;
  name: string;
  description: string;
  price: number;
  images: ImageResolutions;
}
