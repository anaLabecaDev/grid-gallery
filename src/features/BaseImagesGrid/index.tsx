import React from 'react';
import { useGetPhotosQuery } from '../../app/service/unsplash';
import Empty from '../../common/Empty';
import PhotoGallery from '../../common/PhotoGallery';
import styles from './baseImagesGrid.module.scss';

function BaseImagesGrid() {
  const { data, isLoading } = useGetPhotosQuery({});

  if (isLoading) {
    <h1 className={styles.loader}>Loading...</h1>;
  }

  return <>{data ? <PhotoGallery photos={data} /> : <Empty />}</>;
}

export default BaseImagesGrid;
