import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IModalsStateType {
  isAuthModalOpen: boolean;
  targetUrl: string;
}

const initialState: IModalsStateType = {
  isAuthModalOpen: false,
  targetUrl: '/',
};

const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload;
    },
    setTargetUrl: (state, action: PayloadAction<string>) => {
      state.targetUrl = action.payload;
    },
  },
});

export const { setIsAuthModalOpen, setTargetUrl } = modals.actions;

export default modals.reducer;

export const getIsAuthModalOpen = (state: RootState) =>
  state.modals.isAuthModalOpen;
export const getTargetUrl = (state: RootState) => state.modals.targetUrl;
