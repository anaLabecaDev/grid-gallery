import React from 'react';
import cn from 'classnames';
import styles from './favoriteButton.module.scss';
import { ReactComponent as Heart } from '../../../assets/heart.svg';

interface IFavoriteButtonProps {
  isFavorite: boolean;
  onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FavoriteButton({ isFavorite, onClick }: IFavoriteButtonProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="favoriteToggle" className={cn(styles.favoriteToggle, { [styles.active]: isFavorite })}>
        <Heart title="heart" />
        <p className={styles.text}>{isFavorite ? 'Unlike' : 'Like'}</p>
      </label>
      <input type="checkbox" id="favoriteToggle" checked={isFavorite} onChange={onClick} className={styles.hidden} />
    </div>
  );
}

export default FavoriteButton;
