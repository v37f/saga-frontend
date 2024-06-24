import { ICustomerType } from './types';

export const defaultCurrentUser: ICustomerType = {
  userId: 0,
  userRole: 'customer',
  name: '',
  lastName: '',
  surname: '',
  email: 'example@example.com',
  phone: '+79991234567',
  preferStyle: 'Абстракция',
  preferCategory: 'Живопись',
  favoriteProducts: [],
  favoriteArtist: [],
  subscription: null,
  orders: [],
};
