import type { ButtonProps } from './Button.types';
import './Button.css';

export function Button({
  variant,
  size = 'medium',
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconEnd,
  fullWidth = false,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    isDisabled && 'button--disabled',
    loading && 'button--loading',
    fullWidth && 'button--full-width',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      onClick={handleClick}
      aria-busy={loading}
      aria-disabled={isDisabled}
      data-testid="button"
      {...rest}>
      {loading && (
        <span className="button__spinner" aria-hidden="true">
          <svg
            className="button__spinner-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              className="button__spinner-circle"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="32">
              <animate
                attributeName="stroke-dasharray"
                dur="2s"
                values="0 32;16 16;0 32;0 32"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                dur="2s"
                values="0;-16;-32;-32"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </span>
      )}
      {icon && !loading && <span className="button__icon">{icon}</span>}
      {children && <span className="button__content">{children}</span>}
      {iconEnd && !loading && <span className="button__icon-end">{iconEnd}</span>}
    </button>
  );
}

export default Button;
