import { ICurrentUserType } from '../types';

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
  favoriteProducts: [],
  favoriteArtist: [],
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
