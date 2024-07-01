import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProductType } from 'src/utils/types';
import {
  getFavoriteProducts,
  getAllProducts,
  addFavoriteProduct,
  removeFavoriteProduct,
  getProductById,
} from 'src/api/api';
import { defaultCurrentProduct } from 'src/utils/constDefaultCurrenProduct';

interface ICurrentProductStateType {
  item: IProductType;
  isRequest: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  errorMessage: string;
}

interface IProductsArrayStateType {
  array: IProductType[];
  isRequest: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  errorMessage: string;
}

interface IProductsStateType {
  allProducts: IProductsArrayStateType;
  filteredProducts: IProductType[];
  favoriteProducts: IProductsArrayStateType;
  currentProduct: ICurrentProductStateType;
}

const initialState: IProductsStateType = {
  allProducts: {
    array: [],
    isRequest: false,
    isSuccess: false,
    isFailed: false,
    errorMessage: '',
  },
  filteredProducts: [],
  favoriteProducts: {
    array: [],
    isRequest: false,
    isSuccess: false,
    isFailed: false,
    errorMessage: '',
  },
  currentProduct: {
    item: defaultCurrentProduct,
    isRequest: false,
    isSuccess: false,
    isFailed: false,
    errorMessage: '',
  },
};

export const fetchAllProducts = createAsyncThunk(
  'fetch/allProducts',
  async () => {
    const response = await getAllProducts();
    return response;
  }
);

export const fetchFavoriteProducts = createAsyncThunk(
  'fetch/favoriteProducts',
  async () => {
    const response = await getFavoriteProducts();
    return response;
  }
);

export const addToFavoriteProducts = createAsyncThunk(
  'add/favoriteProducts',
  async (product: IProductType) => {
    const response = await addFavoriteProduct(product);
    return response;
  }
);

export const removeFromFavoriteProducts = createAsyncThunk(
  'remove/favoriteProducts',
  async (product: IProductType) => {
    const response = await removeFavoriteProduct(product);
    return response;
  }
);

export const fetchCurrentProduct = createAsyncThunk(
  'fetch/currentProduct',
  async (id: number) => {
    const response = await getProductById(id);
    return response;
  }
);

const modals = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilteredProducts: (state, action: PayloadAction<IProductType[]>) => {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.allProducts.isRequest = true;
        state.allProducts.isSuccess = false;
        state.allProducts.isFailed = false;
        state.allProducts.errorMessage = '';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.allProducts.array = action.payload;
        state.filteredProducts = action.payload;
        state.allProducts.isRequest = false;
        state.allProducts.isSuccess = true;
        state.allProducts.isFailed = false;
        state.allProducts.errorMessage = '';
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.allProducts.isRequest = false;
        state.allProducts.isSuccess = false;
        state.allProducts.isFailed = true;
        console.log(action.error);
      })
      .addCase(fetchFavoriteProducts.pending, (state) => {
        state.favoriteProducts.isRequest = true;
        state.favoriteProducts.isSuccess = false;
        state.favoriteProducts.isFailed = false;
        state.favoriteProducts.errorMessage = '';
      })
      .addCase(fetchFavoriteProducts.fulfilled, (state, action) => {
        state.favoriteProducts.array = action.payload;
        state.favoriteProducts.isRequest = false;
        state.favoriteProducts.isSuccess = true;
        state.favoriteProducts.isFailed = false;
        state.favoriteProducts.errorMessage = '';
      })
      .addCase(fetchFavoriteProducts.rejected, (state, action) => {
        state.favoriteProducts.isRequest = false;
        state.favoriteProducts.isSuccess = false;
        state.favoriteProducts.isFailed = true;
        console.log(action.error);
      })
      .addCase(addToFavoriteProducts.pending, (state) => {
        state.favoriteProducts.isRequest = true;
        state.favoriteProducts.isSuccess = false;
        state.favoriteProducts.isFailed = false;
        state.favoriteProducts.errorMessage = '';
      })
      .addCase(addToFavoriteProducts.fulfilled, (state, action) => {
        state.favoriteProducts.array = [
          action.payload,
          ...state.favoriteProducts.array,
        ];
        state.favoriteProducts.isRequest = false;
        state.favoriteProducts.isSuccess = true;
        state.favoriteProducts.isFailed = false;
        state.favoriteProducts.errorMessage = '';
      })
      .addCase(addToFavoriteProducts.rejected, (state, action) => {
        state.favoriteProducts.isRequest = false;
        state.favoriteProducts.isSuccess = false;
        state.favoriteProducts.isFailed = true;
        console.log(action.error);
      })
      .addCase(removeFromFavoriteProducts.pending, (state) => {
        state.favoriteProducts.isRequest = true;
        state.favoriteProducts.isSuccess = false;
        state.favoriteProducts.isFailed = false;
        state.favoriteProducts.errorMessage = '';
      })
      .addCase(removeFromFavoriteProducts.fulfilled, (state, action) => {
        state.favoriteProducts.array = state.favoriteProducts.array.filter(
          (item) => item.productId !== action.payload.productId
        );
        state.favoriteProducts.isRequest = false;
        state.favoriteProducts.isSuccess = true;
        state.favoriteProducts.isFailed = false;
        state.favoriteProducts.errorMessage = '';
      })
      .addCase(removeFromFavoriteProducts.rejected, (state, action) => {
        state.favoriteProducts.isRequest = false;
        state.favoriteProducts.isSuccess = false;
        state.favoriteProducts.isFailed = true;
        console.log(action.error);
      })
      .addCase(fetchCurrentProduct.pending, (state) => {
        state.currentProduct.isRequest = true;
        state.currentProduct.isSuccess = false;
        state.currentProduct.isFailed = false;
        state.currentProduct.errorMessage = '';
      })
      .addCase(fetchCurrentProduct.fulfilled, (state, action) => {
        state.currentProduct.item = action.payload;
        state.currentProduct.isRequest = false;
        state.currentProduct.isSuccess = true;
        state.currentProduct.isFailed = false;
        state.currentProduct.errorMessage = '';
      })
      .addCase(fetchCurrentProduct.rejected, (state, action) => {
        state.currentProduct.isRequest = false;
        state.currentProduct.isSuccess = false;
        state.currentProduct.isFailed = true;
        state.currentProduct.errorMessage =
          action.error.message || 'Продукт не найден';
      });
  },
});

export const { setFilteredProducts } = modals.actions;

export default modals.reducer;

export const getFilteredProducts = (state: RootState) =>
  state.products.filteredProducts;
export const getAllProductsData = (state: RootState) =>
  state.products.allProducts.array;
export const getFavoriteProductsData = (state: RootState) =>
  state.products.favoriteProducts.array;
export const getCurrentProductData = (state: RootState) =>
  state.products.currentProduct.item;
export const getCurrentProductLoadFailed = (state: RootState) =>
  state.products.currentProduct.isFailed;
export const getCurrentProductLoadFailedMessage = (state: RootState) =>
  state.products.currentProduct.errorMessage;
