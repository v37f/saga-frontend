import { ICustomerType, ISellerType } from '../types';

export const Customer: ICustomerType = {
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
  orders: [],
};

export const Seller: ISellerType = {
  userId: 1,
  userRole: 'seller',
  name: 'Дмитриев',
  lastName: 'Дмитрий',
  surname: 'Дмитриевич',
  email: 'dmitry@mail.com',
  phone: '+79067839823',
  products: [],
  orders: [],
};
