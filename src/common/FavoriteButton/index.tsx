import React from 'react';
import cn from 'classnames';
import styles from './favoriteButton.module.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';

interface IFavoriteButtonProps {
  isFavorite: boolean;
  customStyle?: string;
  withText?: boolean;
}

function FavoriteButton({ isFavorite, customStyle, withText = false }: IFavoriteButtonProps) {
  return (
    <button type="button" aria-label="Toggle Favorite" className={cn(styles.button, customStyle)}>
      <Heart title="heart" />
      {withText && <p className={styles.text}>{isFavorite ? 'Unlike' : 'Like'}</p>}
    </button>
  );
}

export default FavoriteButton;
