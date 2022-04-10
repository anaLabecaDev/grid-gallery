import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './photoInfoModal.module.scss';
import Modal from '../../common/Modal';
import { useGetPhotoDetailQuery } from '../../app/service/unsplash';
import { ReactComponent as Close } from '../../assets/close.svg';

function PhotoInfoModal() {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  const { data, isLoading } = useGetPhotoDetailQuery({ photoId: id || '' });

  console.log(data);

  const onDismiss = () => {
    navigate(-1);
  };

  return (
    <Modal onClose={onDismiss}>
      <section className={styles.photoDetailsWrapper}>
        <img src={data?.urls.small} alt="my_image" />
        <section>
          <Close title="close" onClick={onDismiss} />
          <h1>{data?.alt_description || 'N/A'}</h1>
          <p>{data?.user.first_name || 'Anonymous'}</p>
        </section>
      </section>
    </Modal>
  );
}

export default PhotoInfoModal;
