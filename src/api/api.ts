import { Customer, Seller } from 'src/utils/mock/currentUserMockData';
import { ICurrentUserType } from 'src/utils/types';

export const getCurrentUser = async (isSeller: boolean) => {
  //regions from server
  const CurrentUserDataFromServer: ICurrentUserType = isSeller
    ? Seller
    : Customer;
  const res = await Promise.resolve(CurrentUserDataFromServer);

  return res;
};

export const updateCurrentUser = async <T>(newUserInfo: T) => {
  //regions from server
  const updatedtUserDataFromServer: T = newUserInfo;

  const res = await Promise.resolve(updatedtUserDataFromServer);

  return res;
};

export const login = async () => {
  //login request

  const res = await Promise.resolve();

  return res;
};

export const register = async () => {
  //login request

  const res = await Promise.resolve();

  return res;
};
