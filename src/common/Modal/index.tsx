import React, { useEffect, useRef } from 'react';
import ReactPortal from '../ReactPortal';
import styles from './modal.module.scss';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

function Modal({ children, onClose, isOpen }: IModalProps) {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return isOpen ? (
    <ReactPortal wrapperId="modal-portal-container">
      <div className={styles.modalOverlay}>{children}</div>
    </ReactPortal>
  ) : null;
}

export default Modal;
