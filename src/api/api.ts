import {
  artistMockData,
  favoriteArtistsMockData,
} from 'src/utils/mock/artistsMockData';
import { Customer, Seller } from 'src/utils/mock/currentUserMockData';
import {
  favoriteProductsMockData,
  productsMockData,
} from 'src/utils/mock/productsMockData';
import {
  IArtistType,
  ICurrentUserType,
  IProductType,
  TUserRoleType,
} from 'src/utils/types';
import { $host } from './index';

// all products
export const getAllProducts = async () => {
  const productsFromServer: IProductType[] = productsMockData;
  const res = await Promise.resolve(productsFromServer);
  return res;
};

// current user favorite products
export const getFavoriteProducts = async () => {
  const favoriteProductsFromServer: IProductType[] = favoriteProductsMockData;
  const res = await Promise.resolve(favoriteProductsFromServer);
  return res;
};

export const addFavoriteProduct = async (product: IProductType) => {
  const res = await Promise.resolve(product);
  return res;
};

export const removeFavoriteProduct = async (product: IProductType) => {
  const res = await Promise.resolve(product);
  return res;
};

// get product by id
export const getProductById = async (id: number) => {
  const res = await new Promise<IProductType>((resolve, reject) => {
    const findedProduct = productsMockData.find(
      (product) => product.productId === id
    );
    if (findedProduct) {
      resolve(findedProduct);
    } else {
      reject(new Error('Товар не найден'));
    }
  });

  return res;
};

// get artist by id
export const getArtistById = async (id: number) => {
  const res = await new Promise<IArtistType>((resolve, reject) => {
    const findedArtist = artistMockData.find(
      (artist) => artist.artistId === id
    );
    if (findedArtist) {
      resolve(findedArtist);
    } else {
      reject(new Error('Художник не найден'));
    }
  });

  return res;
};

// all artists
export const getAllArtists = async () => {
  const artistsFromServer: IArtistType[] = artistMockData;
  const res = await Promise.resolve(artistsFromServer);
  return res;
};

// current user favorite artists
export const getFavoriteArtists = async () => {
  const favoriteArtistsFromServer: IArtistType[] = favoriteArtistsMockData;
  const res = await Promise.resolve(favoriteArtistsFromServer);
  return res;
};

export const addFavoriteArtist = async (artist: IArtistType) => {
  const res = await Promise.resolve(artist);
  return res;
};

export const removeFavoriteArtist = async (artist: IArtistType) => {
  const res = await Promise.resolve(artist);
  return res;
};

// current user
export const getCurrentUser = async (isSeller: boolean) => {
  const currentUserDataFromServer: ICurrentUserType = isSeller
    ? Seller
    : Customer;
  const res = await Promise.resolve(currentUserDataFromServer);

  return res;
};

export const updateCurrentUser = async <T>(newUserInfo: T) => {
  const updatedtUserDataFromServer: T = newUserInfo;

  const res = await Promise.resolve(updatedtUserDataFromServer);

  return res;
};

// auth
// export const login = async () => {
//   const res = await Promise.resolve();
//   return res;
// };

interface ILoginPropstype {
  email: string;
  password: string;
  role: TUserRoleType;
}

export const login = async ({ email, password, role }: ILoginPropstype) => {
  const res = await $host.post('api/auth/jwt/create', {
    email,
    password,
    role,
  });

  return res;
};

export const register = async () => {
  const res = await Promise.resolve();
  return res;
};
