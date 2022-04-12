import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Photo } from '../../app/service/types';
import { RootState } from '../../app/store';

export interface FavoritesSliceState {
  // favorites: { [photoId: string]: Photo };
  favorites: Array<string>;
}

const initialState: FavoritesSliceState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }: PayloadAction<{ photoId: string }>) => {
      const isFavorite = state.favorites.includes(payload.photoId);
      if (isFavorite) {
        state.favorites.filter((photoId) => photoId !== payload.photoId);
      } else {
        state.favorites.push(payload.photoId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const selectIsFavorite = (state: RootState, photoId: string) => state.favorites.favorites.includes(photoId);
