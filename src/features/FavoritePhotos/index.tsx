import React from 'react';
import { useTypedSelector } from '../../app/store';
import Empty from '../../common/Empty';
import PhotoGallery from '../../common/PhotoGallery';
import { selectFavorites } from './favoritesSlice';

function FavoritePhotos() {
  const favoriteList = useTypedSelector(selectFavorites);

  return <>{favoriteList?.length > 0 ? <PhotoGallery photos={favoriteList} /> : <Empty />}</>;
}

export default FavoritePhotos;
