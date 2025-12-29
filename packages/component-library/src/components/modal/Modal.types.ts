export interface ModalProps {
  /**
   * Controls whether the modal is open
   */
  isOpen: boolean;
  /**
   * Callback when modal should close
   */
  onClose: () => void;
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Show close button
   * @default true
   */
  showCloseButton?: boolean;
}
