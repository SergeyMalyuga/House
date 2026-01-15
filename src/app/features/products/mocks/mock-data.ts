import {ImagesByCountry} from '../../../core/models/images-by-country.model';
import {Country} from '../../../core/constants/consts';
import {nanoid} from 'nanoid';

export const images: ImagesByCountry = {
  [Country.FR]: [
    {
      id: nanoid(),
      author: 'Марсель Руссо',
      name: 'Охота Амура',
      description: 'Холст, масло (50х80)',
      price: 14500,
      images: {
        desktop: '../../../assets/images/raster/fr-cupid\'s-hunt-desktop.jpg',
        tablet: '../../../assets/images/raster/fr-cupid\'s-hunt-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/fr-cupid\'s-hunt-tablet-510.jpg',
        mobile: '../../../assets/images/raster/fr-cupid\'s-hunt-mobile.jpg',
      }
    },
    {
      id: nanoid(),
      author: 'Анри Селин',
      name: 'Дама с собачкой',
      description: 'Акрил, бумага (50х80)',
      price: 16500,
      images: {
        desktop: '../../../assets/images/raster/fr-the-lady-with-the-dog-desktop.jpg',
        tablet: '../../../assets/images/raster/fr-the-lady-with-the-dog-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/fr-the-lady-with-the-dog-tablet-510.jpg',
        mobile: '../../../assets/images/raster/fr-the-lady-with-the-dog-mobile.jpg',
      }
    },
    {
      id: nanoid(),
      author: 'Франсуа Дюпон',
      name: 'Процедура',
      description: 'Цветная литография (40х60)',
      price: 20000,
      images: {
        desktop: '../../../assets/images/raster/fr-procedure-desktop.jpg',
        tablet: '../../../assets/images/raster/fr-procedure-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/fr-procedure-tablet-510.jpg',
        mobile: '../../../assets/images/raster/fr-procedure-mobile.jpg',
      }
    },
    {
      id: nanoid(),
      author: 'Луи Детуш',
      name: 'Роза',
      description: 'Бумага, акрил (50х80)',
      price: 12000,
      images: {
        desktop: '../../../assets/images/raster/fr-rose-desktop.jpg',
        tablet: '../../../assets/images/raster/fr-rose-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/fr-rose-tablet-510.jpg',
        mobile: '../../../assets/images/raster/fr-rose-mobile.jpg',
      }
    },
    {
      id: nanoid(),
      author: 'Франсуа Дюпон',
      name: 'Птичья трапеза',
      description: 'Цветная литография (40х60)',
      price: 22500,
      images: {
        desktop: '../../../assets/images/raster/fr-bird-meal-desktop.jpg',
        tablet: '../../../assets/images/raster/fr-bird-meal-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/fr-bird-meal-tablet-510.jpg',
        mobile: '../../../assets/images/raster/fr-bird-meal-mobile.jpg',
      }
    },
    {
      id: nanoid(),
      author: 'Пьер Моранж',
      name: 'Пейзаж с рыбой',
      description: 'Цветная литография (40х60)',
      price: 20000,
      images: {
        desktop: '../../../assets/images/raster/fr-landscape-with-fish-desktop.jpg',
        tablet: '../../../assets/images/raster/fr-landscape-with-fish-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/fr-landscape-with-fish-tablet-510.jpg',
        mobile: '../../../assets/images/raster/fr-landscape-with-fish-mobile.jpg',
      }
    }
  ],
  [Country.DE]: [],
}
