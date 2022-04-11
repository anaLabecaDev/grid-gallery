import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface FavoritesSliceState {
  favorites: string[];
}

const initialState: FavoritesSliceState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<{ favorite: string }>) => {
      state.favorites.push(payload.favorite);
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
