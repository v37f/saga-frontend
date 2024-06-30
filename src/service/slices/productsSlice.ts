import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProductType } from 'src/utils/types';
import { getProducts } from 'src/api/api';

interface IFiltersStateType {
  products: IProductType[];
  filteredProducts: IProductType[];
  isRequest: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  errorMessage: string;
}

const initialState: IFiltersStateType = {
  products: [],
  filteredProducts: [],
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
};

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
  const response = await getProducts();
  return response;
});

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
      .addCase(fetchProducts.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
        state.isFailed = false;
        state.errorMessage = '';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.isRequest = false;
        state.isSuccess = true;
        state.isFailed = false;
        state.errorMessage = '';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.isFailed = true;
        console.log(action.error);
      });
  },
});

export const { setFilteredProducts } = modals.actions;

export default modals.reducer;

export const getFilteredProducts = (state: RootState) =>
  state.products.filteredProducts;
export const getAllProducts = (state: RootState) => state.products.products;
