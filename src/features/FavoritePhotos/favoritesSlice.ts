import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PhotoDetail } from '../../app/service/types';
import { RootState } from '../../app/store';

export interface FavoritesSliceState {
  favorites: Array<PhotoDetail>;
}

const initialState: FavoritesSliceState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }: PayloadAction<{ photo: PhotoDetail }>) => {
      const { photo } = payload;
      const isFavorite = state.favorites.find((storedPhoto) => storedPhoto.id === photo.id);
      if (isFavorite) {
        state.favorites.filter((storedPhoto) => storedPhoto.id !== photo.id);
      } else {
        state.favorites.push(photo);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const selectIsFavorite = (state: RootState, photoId: string) =>
  state.favorites.favorites.some((photo) => photo.id === photoId);
