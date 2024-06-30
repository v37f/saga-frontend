import { ICurrentUserType } from '../types';
import { artistMockData } from './artistsMockData';
import { productsMockData } from './productsMockData';

export const Customer: ICurrentUserType = {
  userId: 1,
  userRole: 'customer',
  name: 'Иванов',
  lastName: 'Иван',
  surname: 'Иванович',
  email: 'ivanivanov@mail.com',
  phone: '+79163223434',
  preferStyle: 'Минимализм',
  preferCategory: 'Графика',
  favoriteProducts: [
    productsMockData[3],
    productsMockData[5],
    productsMockData[8],
    productsMockData[12],
    productsMockData[13],
    productsMockData[4],
  ],
  favoriteArtist: [
    artistMockData[2],
    artistMockData[3],
    artistMockData[1],
    artistMockData[1],
    artistMockData[1],
  ],
  subscription: null,
  customerOrders: [],
};

export const Seller: ICurrentUserType = {
  userId: 1,
  userRole: 'seller',
  name: 'Дмитриев',
  lastName: 'Дмитрий',
  surname: 'Дмитриевич',
  email: 'dmitry@mail.com',
  phone: '+79067839823',
  goods: [],
  sellerOrders: [],
};
