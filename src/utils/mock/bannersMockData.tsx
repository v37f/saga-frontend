import banner_1 from 'src/assets/mock/banners/Banner_1.jpg';
import banner_2 from 'src/assets/mock/banners/Banner_2.jpg';
import { IBannerItemType } from '../types';

export const bannersMockData: IBannerItemType[] = [
  {
    bannerId: 1,
    src: banner_1,
    title: 'Покупайте современное искусство',
  },
  {
    bannerId: 2,
    src: banner_2,
    title: 'Аукцион 10 июля. Картины Ван Гога',
  },
];
