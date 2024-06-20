import prozepina from 'src/assets/mock/products/prozerpina.jpg';
import monaliza from 'src/assets/mock/products/monaliza.png';
import starnight from 'src/assets/mock/products/starnight.jpg';
import { IProductType } from '../types';

export const productsMockData: IProductType[] = [
  {
    productId: 1,
    titleArt: 'Портрет госпожи Лизы дель Джокондо',
    orientalProduct: 'вертикальная',
    artist: {
      artistId: 2,
      lastnameArtist: 'да Винчи',
      nameArtist: 'Леонардо',
    },
    priceSale: 300000,
    forecastPrice: 330000,
    photoProduct: [monaliza],
  },
  {
    productId: 2,
    titleArt: 'Прозерпина',
    orientalProduct: 'квадратная',
    artist: {
      artistId: 1,
      lastnameArtist: 'Россетти',
      nameArtist: 'Данте Габриэль',
    },
    priceSale: 120000,
    forecastPrice: 100000,
    photoProduct: [prozepina],
  },
  {
    productId: 3,
    titleArt: 'Портрет госпожи Лизы дель Джокондо',
    orientalProduct: 'вертикальная',
    artist: {
      artistId: 2,
      lastnameArtist: 'да Винчи',
      nameArtist: 'Леонардо',
    },
    priceSale: 300000,
    forecastPrice: 330000,
    photoProduct: [monaliza],
  },
  {
    productId: 4,
    titleArt: 'Звёздная ночь',
    orientalProduct: 'горизонтальная',
    artist: {
      artistId: 3,
      lastnameArtist: 'Ван Гог',
      nameArtist: 'Винсент',
    },
    priceSale: 200000,
    forecastPrice: 220000,
    photoProduct: [starnight],
  },
  {
    productId: 5,
    titleArt: 'Звёздная ночь',
    orientalProduct: 'горизонтальная',
    artist: {
      artistId: 3,
      lastnameArtist: 'Ван Гог',
      nameArtist: 'Винсент',
    },
    priceSale: 200000,
    forecastPrice: 220000,
    photoProduct: [starnight],
  },
  {
    productId: 6,
    titleArt: 'Портрет госпожи Лизы дель Джокондо',
    orientalProduct: 'вертикальная',
    artist: {
      artistId: 2,
      lastnameArtist: 'да Винчи',
      nameArtist: 'Леонардо',
    },
    priceSale: 300000,
    forecastPrice: 330000,
    photoProduct: [monaliza],
  },
  {
    productId: 7,
    titleArt: 'Прозерпина',
    orientalProduct: 'квадратная',
    artist: {
      artistId: 1,
      lastnameArtist: 'Россетти',
      nameArtist: 'Данте Габриэль',
    },
    priceSale: 120000,
    forecastPrice: 100000,
    photoProduct: [prozepina],
  },
  {
    productId: 8,
    titleArt: 'Портрет госпожи Лизы дель Джокондо',
    orientalProduct: 'вертикальная',
    artist: {
      artistId: 2,
      lastnameArtist: 'да Винчи',
      nameArtist: 'Леонардо',
    },
    priceSale: 300000,
    forecastPrice: 330000,
    photoProduct: [monaliza],
  },
];
