import { useEffect } from 'react';
import { ModalProps } from './Modal.types.ts';
import './Modal.css';

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  showCloseButton = true
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalClasses = ['modal', className].filter(Boolean).join(' ');

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      data-testid="modal-overlay">
      <div className={modalClasses} onClick={(e) => e.stopPropagation()} data-testid="modal">
        {(title || showCloseButton) && (
          <div className="modal__header">
            {title && (
              <h2 id="modal-title" className="modal__title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className="modal__close"
                onClick={onClose}
                aria-label="Close modal"
                type="button">
                ×
              </button>
            )}
          </div>
        )}
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
