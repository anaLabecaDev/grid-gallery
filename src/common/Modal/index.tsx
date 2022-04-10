import React, { useEffect, useRef } from 'react';
import ReactPortal from '../ReactPortal';
import styles from './modal.module.scss';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: IModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <ReactPortal wrapperId="modal-portal-container">
      <div className={styles.modalOverlay}>{children}</div>
    </ReactPortal>
  );
}

export default Modal;
