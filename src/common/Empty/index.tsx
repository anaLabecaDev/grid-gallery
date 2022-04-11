import React from 'react';
import styles from './empty.module.scss';

interface IEmptyProps {
  text: string;
}

function Empty({ text = 'Nothing to show' }: IEmptyProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.message}>{text}</h1>
    </div>
  );
}

export default Empty;
