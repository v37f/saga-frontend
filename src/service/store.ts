import { configureStore } from '@reduxjs/toolkit';
import currentUser from './slices/currentUserSlice';
import modals from './slices/modalsSlice';

export const store = configureStore({
  reducer: {
    currentUser,
    modals,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
