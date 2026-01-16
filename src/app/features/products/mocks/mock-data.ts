import { ProductsByCountry } from '../../../core/models/products-by-country.model';
import { CountryEn } from '../../../core/constants/consts';
import { nanoid } from 'nanoid';

export const mockProducts: ProductsByCountry = {
  [CountryEn.FR]: [
    {
      id: nanoid(),
      author: 'Марсель Руссо',
      name: 'Охота Амура',
      description: 'Холст, масло (50х80)',
      price: 14500,
      images: {
        desktop: "../../../assets/images/raster/fr-cupid's-hunt-desktop.jpg",
        tablet: "../../../assets/images/raster/fr-cupid's-hunt-tablet-690.jpg",
        tabletMini:
          "../../../assets/images/raster/fr-cupid's-hunt-tablet-510.jpg",
        mobile: "../../../assets/images/raster/fr-cupid's-hunt-mobile.jpg",
      },
    },
    {
      id: nanoid(),
      author: 'Анри Селин',
      name: 'Дама с собачкой',
      description: 'Акрил, бумага (50х80)',
      price: 16500,
      images: {
        desktop:
          '../../../assets/images/raster/fr-the-lady-with-the-dog-desktop.jpg',
        tablet:
          '../../../assets/images/raster/fr-the-lady-with-the-dog-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/fr-the-lady-with-the-dog-tablet-510.jpg',
        mobile:
          '../../../assets/images/raster/fr-the-lady-with-the-dog-mobile.jpg',
      },
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
      },
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
      },
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
      },
    },
    {
      id: nanoid(),
      author: 'Пьер Моранж',
      name: 'Пейзаж с рыбой',
      description: 'Цветная литография (40х60)',
      price: 20000,
      images: {
        desktop:
          '../../../assets/images/raster/fr-landscape-with-fish-desktop.jpg',
        tablet:
          '../../../assets/images/raster/fr-landscape-with-fish-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/fr-landscape-with-fish-tablet-510.jpg',
        mobile:
          '../../../assets/images/raster/fr-landscape-with-fish-mobile.jpg',
      },
    },
  ],
  [CountryEn.DE]: [
    {
      id: nanoid(),
      author: 'Курт Вернер',
      name: 'Над городом',
      description: 'Цветная литография (40х60)',
      price: 16000,
      images: {
        desktop: '../../../assets/images/raster/de-above-the-city-desktop.jpg',
        tablet:
          '../../../assets/images/raster/de-above-the-city-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/de-above-the-city-tablet-510.jpg',
        mobile: '../../../assets/images/raster/de-above-the-city-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Макс Рихтер',
      name: 'Птенцы',
      description: 'Холст, масло (50х80)',
      price: 14500,
      images: {
        desktop: '../../../assets/images/raster/de-a-bright-bird-desktop.jpg',
        tablet: '../../../assets/images/raster/de-a-bright-bird-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/de-a-bright-bird-tablet-510.jpg',
        mobile: '../../../assets/images/raster/de-a-bright-bird-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Мартин Майер',
      name: 'Среди листьев',
      description: 'Цветная литография (40х60)',
      price: 20000,
      images: {
        desktop:
          '../../../assets/images/raster/de-among-the-leaves-desktop.jpg',
        tablet:
          '../../../assets/images/raster/de-among-the-leaves-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/de-among-the-leaves-tablet-510.jpg',
        mobile: '../../../assets/images/raster/de-among-the-leaves-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Герман Беккер',
      name: 'Яркая птица',
      description: 'Цветная литография (40х60)',
      price: 13000,
      images: {
        desktop: '../../../assets/images/raster/de-a-bright-bird-desktop.jpg',
        tablet: '../../../assets/images/raster/de-a-bright-bird-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/de-a-bright-bird-tablet-510.jpg',
        mobile: '../../../assets/images/raster/de-a-bright-bird-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Вульф Бауэр',
      name: 'Дятлы',
      description: 'Бумага, акрил (50х80)',
      price: 20000,
      images: {
        desktop: '../../../assets/images/raster/de-woodpeckers-desktop.jpg',
        tablet: '../../../assets/images/raster/de-woodpeckers-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/de-woodpeckers-tablet-510.jpg',
        mobile: '../../../assets/images/raster/de-woodpeckers-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Вальтер Хартманн',
      name: 'Большие воды',
      description: 'Бумага, акрил (50х80)',
      price: 23000,
      images: {
        desktop: '../../../assets/images/raster/de-big-waters-desktop.jpg',
        tablet: '../../../assets/images/raster/de-big-waters-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/de-big-waters-tablet-510.jpg',
        mobile: '../../../assets/images/raster/de-big-waters-mobile.jpg',
      },
    },
  ],
  [CountryEn.GB]: [
    {
      id: nanoid(),
      author: 'Пол Смит',
      name: 'Дикий зверь',
      description: 'Акварель, бумага (50х80)',
      price: 20000,
      images: {
        desktop: '../../../assets/images/raster/gb-wild-animal-desktop.jpg',
        tablet: '../../../assets/images/raster/gb-wild-animal-tablet-690.jpg',
        tabletMini:
          '../../../assets/images/raster/gb-wild-animal-table-510.jpg',
        mobile: '../../../assets/images/raster/gb-wild-animal-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Джон Уайт',
      name: 'Скалистый берег',
      description: 'Цветная литография (40х60)',
      price: 17500,
      images: {
        desktop: '../../../assets/images/raster/gb-coast-desktop.jpg',
        tablet: '../../../assets/images/raster/gb-coast-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/gb-coast-table-510.jpg',
        mobile: '../../../assets/images/raster/gb-coast-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Джим Уотсон',
      name: 'Река и горы',
      description: 'Акварель, бумага (50х80)',
      price: 20500,
      images: {
        desktop: '../../../assets/images/raster/gb-river-desktop.jpg',
        tablet: '../../../assets/images/raster/gb-river-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/gb-river-table-510.jpg',
        mobile: '../../../assets/images/raster/gb-river-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Юджин Зиллион',
      name: 'Белый попугай',
      description: 'Цветная литография (40х60)',
      price: 15500,
      images: {
        desktop: '../../../assets/images/raster/gb-parrot-desktop.jpg',
        tablet: '../../../assets/images/raster/gb-parrot-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/gb-parrot-table-510.jpg',
        mobile: '../../../assets/images/raster/gb-parrot-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Эрик Гиллман',
      name: 'Ночная рыба',
      description: 'Бумага, акрил (50х80)',
      price: 12500,
      images: {
        desktop: '../../../assets/images/raster/gb-fish-desktop.jpg',
        tablet: '../../../assets/images/raster/gb-fish-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/gb-fish-table-510.jpg',
        mobile: '../../../assets/images/raster/gb-fish-mobile.jpg',
      },
    },
    {
      id: nanoid(),
      author: 'Альфред Барр',
      name: 'Рыжий кот',
      description: 'Цветная литография (40х60) ',
      price: 21000,
      images: {
        desktop: '../../../assets/images/raster/gb-cat-desktop.jpg',
        tablet: '../../../assets/images/raster/gb-cat-tablet-690.jpg',
        tabletMini: '../../../assets/images/raster/gb-cat-table-510.jpg',
        mobile: '../../../assets/images/raster/gb-cat-mobile.jpg',
      },
    },
  ],
};
