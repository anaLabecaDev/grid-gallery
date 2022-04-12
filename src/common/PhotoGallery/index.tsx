import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Photo } from '../../app/service/types';
import styles from './photoGallery.module.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { useTypedSelector } from '../../app/store';
import { selectFavorites } from '../../features/FavoritePhotos/favoritesSlice';

type PhotoGallery = Pick<Photo, 'urls' | 'alt_description' | 'id'>;
interface IPhotoGalleryProps {
  photos: PhotoGallery[];
}

function PhotoGallery({ photos }: IPhotoGalleryProps) {
  const location = useLocation();
  const favoriteList = useTypedSelector(selectFavorites);

  return (
    <section className={styles.imageGallery}>
      {photos?.map((photo) => {
        const isFavorite = favoriteList?.some((favorite) => favorite.id === photo.id);
        return (
          <Link className={styles.card} key={photo.id} to={`/${photo.id}`} state={{ backgroundLocation: location }}>
            {isFavorite ? <Heart title="favorite" className={styles.favorite} /> : null}
            <img src={photo.urls.regular} alt={photo.alt_description || 'N/A'} />
          </Link>
        );
      })}
    </section>
  );
}

export default PhotoGallery;
