import {Country} from '../constants/consts';
import {Image} from './image.model';

export type ImagesByCountry = Partial<Record<Country, Image[]>>;
