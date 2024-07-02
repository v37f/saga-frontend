import { defaultCurrentArtist } from './constDefaultCurrenArtist';
import { IProductType } from './types';

export const defaultCurrentProduct: IProductType = {
  productId: 0,
  titleArt: 'Картина',
  orientalProduct: 'вертикальная',
  artist: defaultCurrentArtist,
  estimatedPrice: 0,
  forecastPrice: 0,
  photoProduct: [],
  widthCm: 0,
  heightCm: 0,
  yearOfCreation: 0,
  artMaterial: 'Масляные краски',
  categoryArt: 'Живопись',
  styleArt: 'Абстракция',
};
