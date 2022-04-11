import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './photoInfoModal.module.scss';
import Modal from '../../common/Modal';
import { useGetPhotoDetailQuery } from '../../app/service/unsplash';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Shared } from '../../assets/shared.svg';
import FavoriteButton from '../../common/FavoriteButton';
import PhotoInformation from './const';
import { Exif } from '../../app/service/types';

function Creator({ name }: { name?: string }) {
  return (
    <article className={styles.creator}>
      <Shared title="shared" className={styles.icon} />
      <p className={styles.name}>{name || 'Anonymous'}</p>
    </article>
  );
}

function InfoDetails({ data }: { data?: Exif }) {
  return (
    <dl className={styles.photoInfo}>
      {PhotoInformation.map(({ text, value }) => (
        <div>
          <dt className={styles.title}>{text}</dt>
          <dd className={styles.value}>{data?.[value] ?? 'N/A'}</dd>
        </div>
      ))}
    </dl>
  );
}

function Actions({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.actions}>
      <FavoriteButton isFavorite withText />
      <Close title="close" onClick={onClose} className={styles.close} />
    </div>
  );
}

function PhotoInfoModal() {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  const { data } = useGetPhotoDetailQuery({ photoId: id || '' });

  const onDismiss = () => {
    navigate(-1);
  };

  return (
    <Modal onClose={onDismiss}>
      <div className={styles.photoDetailsWrapper}>
        <section className={styles.content}>
          <section className={styles.image}>
            <img src={data?.urls.small} alt="my_image" />
          </section>
          <section className={styles.info}>
            <Actions onClose={onDismiss} />
            <h1 className={styles.imageName}>{data?.alt_description ?? 'N/A'}</h1>
            <Creator name={data?.user.first_name} />
            <InfoDetails data={data?.exif} />
          </section>
        </section>
      </div>
    </Modal>
  );
}

export default PhotoInfoModal;
