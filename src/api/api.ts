import { Customer, Seller } from 'src/utils/mock/currentUserMockData';
import {
  favoriteProductsMockData,
  productsMockData,
} from 'src/utils/mock/productsMockData';
import { ICurrentUserType, IProductType } from 'src/utils/types';

export const getAllProducts = async () => {
  //products from server
  const productsFromServer: IProductType[] = productsMockData;

  const res = await Promise.resolve(productsFromServer);

  return res;
};

export const getFavoriteProducts = async () => {
  //products from server
  const favoriteProductsFromServer: IProductType[] = favoriteProductsMockData;

  const res = await Promise.resolve(favoriteProductsFromServer);

  return res;
};

export const getCurrentUser = async (isSeller: boolean) => {
  //regions from server
  const currentUserDataFromServer: ICurrentUserType = isSeller
    ? Seller
    : Customer;
  const res = await Promise.resolve(currentUserDataFromServer);

  return res;
};

export const updateCurrentUser = async <T>(newUserInfo: T) => {
  //regions from server
  const updatedtUserDataFromServer: T = newUserInfo;

  const res = await Promise.resolve(updatedtUserDataFromServer);

  return res;
};

export const addFavoriteProduct = async (product: IProductType) => {
  //regions from server

  const res = await Promise.resolve(product);

  return res;
};

export const removeFavoriteProduct = async (product: IProductType) => {
  //regions from server

  const res = await Promise.resolve(product);

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
