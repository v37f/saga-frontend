import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFiltersStateType {
  category: string[];
  style: string[];
  size: string[];
  orientation: string[];
  price: string[];
  keyword: string;
}

const initialState: IFiltersStateType = {
  category: [],
  style: [],
  size: [],
  orientation: [],
  price: [],
  keyword: '',
};

const modals = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
    setStyleFilter: (state, action: PayloadAction<string[]>) => {
      state.style = action.payload;
    },
    setSizeFilter: (state, action: PayloadAction<string[]>) => {
      state.size = action.payload;
    },
    setOrientationFilter: (state, action: PayloadAction<string[]>) => {
      state.orientation = action.payload;
    },
    setPriceFilter: (state, action: PayloadAction<string[]>) => {
      state.price = action.payload;
    },
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setDefaultFilters: (state) => {
      state.category = [];
      state.style = [];
      state.size = [];
      state.orientation = [];
      state.price = [];
    },
  },
});

export const {
  setCategoryFilter,
  setStyleFilter,
  setSizeFilter,
  setOrientationFilter,
  setPriceFilter,
  setKeyword,
  setDefaultFilters,
} = modals.actions;

export default modals.reducer;

export const getCategoryFilter = (state: RootState) => state.filters.category;
export const getStyleFilter = (state: RootState) => state.filters.style;
export const getSizeFilter = (state: RootState) => state.filters.size;
export const getOrientationFilter = (state: RootState) =>
  state.filters.orientation;
export const getPriceFilter = (state: RootState) => state.filters.price;
export const getKeyword = (state: RootState) => state.filters.keyword;
