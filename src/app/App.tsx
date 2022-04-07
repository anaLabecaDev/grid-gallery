import React from 'react';
import Navigation from '../common/Navigation';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <div className={styles.content}> Main Content</div>
    </div>
  );
}

export default App;
