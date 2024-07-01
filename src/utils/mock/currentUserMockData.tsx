import { ICurrentUserType } from '../types';
import { artistMockData } from './artistsMockData';

export const Customer: ICurrentUserType = {
  userId: 1,
  userRole: 'customer',
  name: 'иван',
  lastName: 'Иванов',
  surname: 'Иванович',
  email: 'ivanivanov@mail.com',
  phone: '+79163223434',
  preferStyle: 'Минимализм',
  preferCategory: 'Графика',
  favoriteArtist: [
    artistMockData[2],
    artistMockData[3],
    artistMockData[1],
    artistMockData[4],
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
