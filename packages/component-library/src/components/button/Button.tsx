import { buttonProps } from './button.prop.ts';
import './Button.css';

export default function Button({ variant, children, onClick, disabled }: buttonProps) {
  return (
    <button
      className={`button ${variant} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      data-testid="button">
      {children}
    </button>
  );
}
