import React, { useEffect, useRef, useState } from 'react';
import { Photo } from '../../app/service/types';
import { useGetPhotosQuery } from '../../app/service/unsplash';
import Empty from '../../common/Empty';
import PhotoGallery from '../../common/PhotoGallery';
import styles from './baseImagesGrid.module.scss';

export function isValidNotEmptyArray<Type>(array: Type[]): boolean {
  return !!(array && array?.length && array?.length > 0);
}

function arrayUniqueByKey<Type>(array: Type[], key: keyof Type): Type[] {
  return [...new Map(array.map((item) => [item[key], item])).values()];
}

function BaseImagesGrid() {
  const [page, setPage] = useState(1);
  const [combinedData, setCombinedData] = useState<Array<Photo>>([]);
  const { data: photos, isLoading, isSuccess, currentData } = useGetPhotosQuery({ page });

  const containerRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction);

    if (containerRef.current) observer.observe(containerRef.current);

    const reference = containerRef.current;

    return () => {
      if (reference) observer.unobserve(reference);
    };
  });

  useEffect(() => {
    if (isVisible && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isVisible, isLoading]);

  useEffect(() => {
    if (!isSuccess) return;
    if (currentData) {
      setCombinedData((prevState) => arrayUniqueByKey([...prevState, ...currentData], 'id'));
    }
  }, [currentData, isSuccess]);

  if (isLoading) {
    <h1 className={styles.loader}>Loading...</h1>;
  }

  return (
    <>
      {photos ? (
        <>
          <PhotoGallery photos={combinedData} />
          <p ref={containerRef}>Load more item...</p>
        </>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default BaseImagesGrid;
