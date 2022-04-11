import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from '../common/Navigation';
import BaseImagesGrid from '../features/BaseImagesGrid';
import FavoritePhotos from '../features/FavoritePhotos';
import PhotoInfoModal from '../features/PhotoInfoModal';
import styles from './app.module.scss';

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <div className={styles.content}>
        <Routes location={state?.backgroundLocation || location}>
          <Route index element={<BaseImagesGrid />} />
          <Route path="home" element={<BaseImagesGrid />} />
          <Route path="favorites" element={<FavoritePhotos />} />
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/:id" element={<PhotoInfoModal />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
