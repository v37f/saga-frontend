import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IArtistType } from 'src/utils/types';
import {
  getAllArtists,
  getFavoriteArtists,
  addFavoriteArtist,
  removeFavoriteArtist,
  getArtistById,
} from 'src/api/api';
import { defaultCurrentArtist } from 'src/utils/constDefaultCurrenArtist';

interface ICurrenArtistStateType {
  item: IArtistType;
  isRequest: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  errorMessage: string;
}

interface IArtistsArrayStateType {
  array: IArtistType[];
  isRequest: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  errorMessage: string;
}

interface IArtistsStateType {
  allArtists: IArtistsArrayStateType;
  favoriteArtists: IArtistsArrayStateType;
  currentArtist: ICurrenArtistStateType;
}

const initialState: IArtistsStateType = {
  allArtists: {
    array: [],
    isRequest: false,
    isSuccess: false,
    isFailed: false,
    errorMessage: '',
  },
  favoriteArtists: {
    array: [],
    isRequest: false,
    isSuccess: false,
    isFailed: false,
    errorMessage: '',
  },
  currentArtist: {
    item: defaultCurrentArtist,
    isRequest: false,
    isSuccess: false,
    isFailed: false,
    errorMessage: '',
  },
};

export const fetchAllArtists = createAsyncThunk(
  'fetch/allArtists',
  async () => {
    const response = await getAllArtists();
    return response;
  }
);

export const fetchFavoriteArtists = createAsyncThunk(
  'fetch/favoriteArtists',
  async () => {
    const response = await getFavoriteArtists();
    return response;
  }
);

export const addToFavoriteArtists = createAsyncThunk(
  'add/favoriteArtists',
  async (artist: IArtistType) => {
    const response = await addFavoriteArtist(artist);
    return response;
  }
);

export const removeFromFavoriteArtists = createAsyncThunk(
  'remove/favoriteArtists',
  async (artist: IArtistType) => {
    const response = await removeFavoriteArtist(artist);
    return response;
  }
);

export const fetchCurrentArtist = createAsyncThunk(
  'fetch/currentArtist',
  async (id: number) => {
    const response = await getArtistById(id);
    return response;
  }
);

const modals = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllArtists.pending, (state) => {
        state.allArtists.isRequest = true;
        state.allArtists.isSuccess = false;
        state.allArtists.isFailed = false;
        state.allArtists.errorMessage = '';
      })
      .addCase(fetchAllArtists.fulfilled, (state, action) => {
        state.allArtists.array = action.payload;
        state.allArtists.isRequest = false;
        state.allArtists.isSuccess = true;
        state.allArtists.isFailed = false;
        state.allArtists.errorMessage = '';
      })
      .addCase(fetchAllArtists.rejected, (state, action) => {
        state.allArtists.isRequest = false;
        state.allArtists.isSuccess = false;
        state.allArtists.isFailed = true;
        console.log(action.error);
      })
      .addCase(fetchFavoriteArtists.pending, (state) => {
        state.favoriteArtists.isRequest = true;
        state.favoriteArtists.isSuccess = false;
        state.favoriteArtists.isFailed = false;
        state.favoriteArtists.errorMessage = '';
      })
      .addCase(fetchFavoriteArtists.fulfilled, (state, action) => {
        state.favoriteArtists.array = action.payload;
        state.favoriteArtists.isRequest = false;
        state.favoriteArtists.isSuccess = true;
        state.favoriteArtists.isFailed = false;
        state.favoriteArtists.errorMessage = '';
      })
      .addCase(fetchFavoriteArtists.rejected, (state, action) => {
        state.favoriteArtists.isRequest = false;
        state.favoriteArtists.isSuccess = false;
        state.favoriteArtists.isFailed = true;
        console.log(action.error);
      })
      .addCase(addToFavoriteArtists.pending, (state) => {
        state.favoriteArtists.isRequest = true;
        state.favoriteArtists.isSuccess = false;
        state.favoriteArtists.isFailed = false;
        state.favoriteArtists.errorMessage = '';
      })
      .addCase(addToFavoriteArtists.fulfilled, (state, action) => {
        state.favoriteArtists.array = [
          action.payload,
          ...state.favoriteArtists.array,
        ];
        state.favoriteArtists.isRequest = false;
        state.favoriteArtists.isSuccess = true;
        state.favoriteArtists.isFailed = false;
        state.favoriteArtists.errorMessage = '';
      })
      .addCase(addToFavoriteArtists.rejected, (state, action) => {
        state.favoriteArtists.isRequest = false;
        state.favoriteArtists.isSuccess = false;
        state.favoriteArtists.isFailed = true;
        console.log(action.error);
      })
      .addCase(removeFromFavoriteArtists.pending, (state) => {
        state.favoriteArtists.isRequest = true;
        state.favoriteArtists.isSuccess = false;
        state.favoriteArtists.isFailed = false;
        state.favoriteArtists.errorMessage = '';
      })
      .addCase(removeFromFavoriteArtists.fulfilled, (state, action) => {
        state.favoriteArtists.array = state.favoriteArtists.array.filter(
          (item) => item.artistId !== action.payload.artistId
        );
        state.favoriteArtists.isRequest = false;
        state.favoriteArtists.isSuccess = true;
        state.favoriteArtists.isFailed = false;
        state.favoriteArtists.errorMessage = '';
      })
      .addCase(removeFromFavoriteArtists.rejected, (state, action) => {
        state.favoriteArtists.isRequest = false;
        state.favoriteArtists.isSuccess = false;
        state.favoriteArtists.isFailed = true;
        console.log(action.error);
      })
      .addCase(fetchCurrentArtist.pending, (state) => {
        state.currentArtist.isRequest = true;
        state.currentArtist.isSuccess = false;
        state.currentArtist.isFailed = false;
        state.currentArtist.errorMessage = '';
      })
      .addCase(fetchCurrentArtist.fulfilled, (state, action) => {
        state.currentArtist.item = action.payload;
        state.currentArtist.isRequest = false;
        state.currentArtist.isSuccess = true;
        state.currentArtist.isFailed = false;
        state.currentArtist.errorMessage = '';
      })
      .addCase(fetchCurrentArtist.rejected, (state, action) => {
        state.currentArtist.isRequest = false;
        state.currentArtist.isSuccess = false;
        state.currentArtist.isFailed = true;
        state.currentArtist.errorMessage =
          action.error.message || 'Художник не найден';
      });
  },
});

export default modals.reducer;

export const getAllArtistsData = (state: RootState) =>
  state.artists.allArtists.array;
export const getFavoriteArtistsData = (state: RootState) =>
  state.artists.favoriteArtists.array;
export const getCurrentArtistData = (state: RootState) =>
  state.artists.currentArtist.item;
export const getCurrentArtistLoadFailed = (state: RootState) =>
  state.artists.currentArtist.isFailed;
export const getCurrentArtistLoadFailedMessage = (state: RootState) =>
  state.artists.currentArtist.errorMessage;
