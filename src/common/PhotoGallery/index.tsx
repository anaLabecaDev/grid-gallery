import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Photo } from '../../app/service/types';
import styles from './photoGallery.module.scss';

interface IPhotoGalleryProps {
  photos: Photo[];
}

function PhotoGallery({ photos }: IPhotoGalleryProps) {
  const location = useLocation();
  return (
    <section className={styles.imageGallery}>
      {photos?.map((photo) => (
        <Link className={styles.card} key={photo.id} to={`/${photo.id}`} state={{ backgroundLocation: location }}>
          <img src={photo.urls.regular} alt={photo.alt_description || 'N/A'} />
        </Link>
      ))}
    </section>
  );
}

export default PhotoGallery;
