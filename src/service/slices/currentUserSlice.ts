import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCurrentUser } from 'src/api/api';
import { defaultCurrentUser } from 'src/utils/constDefaultCurrentUser';
import { ICurrentUserType } from 'src/utils/types';
import { RootState } from '../store';

interface ICurrentUserStateType {
  data: ICurrentUserType;
  isLoggedIn: boolean;
  isRequest: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  errorMessage: string;
}

const initialState: ICurrentUserStateType = {
  data: defaultCurrentUser,
  isLoggedIn: false,
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
};

export const fetchCurrentUser = createAsyncThunk(
  'fetch/currentUser',
  getCurrentUser
);

const currentUser = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUserData: (state, action: PayloadAction<ICurrentUserType>) => {
      state.data = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
        state.isFailed = false;
        state.errorMessage = '';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isRequest = false;
        state.isSuccess = true;
        state.isFailed = false;
        state.errorMessage = '';
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.isFailed = true;
        console.log(action.error);
      });
  },
});

export const { setCurrentUserData, setIsLoggedIn } = currentUser.actions;

export default currentUser.reducer;

export const getCurrentUserData = (state: RootState) => state.currentUser.data;
export const getIsLoggedIn = (state: RootState) => state.currentUser.isLoggedIn;