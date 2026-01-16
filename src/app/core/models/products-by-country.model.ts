import { CountryEn } from '../constants/consts';
import { Product } from './product.model';

export type ProductsByCountry = Partial<Record<CountryEn, Product[]>>;
