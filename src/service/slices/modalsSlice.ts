import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_ROUTE } from 'src/utils/constants';
import { ISubscriptionType } from 'src/utils/types';
import { defaultSelectedSubscription } from 'src/utils/constDefaultSelectedSubscription';

interface IModalsStateType {
  isAuthModalOpen: boolean;
  targetUrl: string;
  isSubscribeModalOpen: boolean;
  selectedSubscription: ISubscriptionType;
}

const initialState: IModalsStateType = {
  isAuthModalOpen: false,
  targetUrl: DEFAULT_ROUTE,
  isSubscribeModalOpen: false,
  selectedSubscription: defaultSelectedSubscription,
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
    setIsSubscribeModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isSubscribeModalOpen = action.payload;
    },
    setSelectedSubscription: (
      state,
      action: PayloadAction<ISubscriptionType>
    ) => {
      state.selectedSubscription = action.payload;
    },
  },
});

export const {
  setIsAuthModalOpen,
  setTargetUrl,
  setIsSubscribeModalOpen,
  setSelectedSubscription,
} = modals.actions;

export default modals.reducer;

export const getIsAuthModalOpen = (state: RootState) =>
  state.modals.isAuthModalOpen;
export const getTargetUrl = (state: RootState) => state.modals.targetUrl;
export const getIsSubscribeModalOpen = (state: RootState) =>
  state.modals.isSubscribeModalOpen;
export const getSelectedSubscription = (state: RootState) =>
  state.modals.selectedSubscription;
