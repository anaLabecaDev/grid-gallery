import React from 'react';
import cn from 'classnames';
import styles from './favoriteButton.module.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';

interface IFavoriteButtonProps {
  isFavorite: boolean;
  customStyle?: string;
}

function FavoriteButton({ isFavorite, customStyle }: IFavoriteButtonProps) {
  return (
    <button type="button" aria-label="Toggle Favorite" className={cn(styles.button, customStyle)}>
      <Heart title="heart" />
    </button>
  );
}

export default FavoriteButton;
