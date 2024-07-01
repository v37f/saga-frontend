import { CUSTOMER_ROLE } from './constants';
import { ICurrentUserType } from './types';

export const defaultCurrentUser: ICurrentUserType = {
  userId: 0,
  userRole: CUSTOMER_ROLE,
  name: '',
  lastName: '',
  surname: '',
  email: 'example@example.com',
  phone: '+79991234567',
  preferStyle: 'Абстракция',
  preferCategory: 'Живопись',
  subscription: null,
  customerOrders: [],
};
