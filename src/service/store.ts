import { configureStore } from '@reduxjs/toolkit';
import currentUser from './slices/currentUserSlice';
import modals from './slices/modalsSlice';
import filters from './slices/filtersSlice';
import products from './slices/productsSlice';
import artists from './slices/artistsSlice';

export const store = configureStore({
  reducer: {
    currentUser,
    modals,
    filters,
    products,
    artists,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
