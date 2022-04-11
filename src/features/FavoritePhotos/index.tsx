import React from 'react';
import { useTypedSelector } from '../../app/store';
import { selectFavorites } from './favoritesSlice';

function FavoritePhotos() {
  const favoriteList = useTypedSelector(selectFavorites);

  return (
    <div>
      <h1>No favorites yet</h1>
    </div>
  );
}

export default FavoritePhotos;
