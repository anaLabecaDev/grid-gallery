import React from 'react';
import { useGetPhotosQuery } from '../../app/service/unsplash';
import PhotoGallery from '../../common/PhotoGallery';
import styles from './baseImagesGrid.module.scss';

function BaseImagesGrid() {
  const { data, isLoading } = useGetPhotosQuery({});

  if (isLoading) {
    <h1 className={styles.loader}>Loading...</h1>;
  }

  return <div className={styles.container}>{data ? <PhotoGallery photos={data} /> : <h1>Nothing to show</h1>}</div>;
}

export default BaseImagesGrid;
