import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IModalsStateType {
  isAuthModalOpen: boolean;
}

const initialState: IModalsStateType = {
  isAuthModalOpen: false,
};

const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload;
    },
  },
});

export const { setIsAuthModalOpen } = modals.actions;

export default modals.reducer;

export const getIsAuthModalOpen = (state: RootState) =>
  state.modals.isAuthModalOpen;
