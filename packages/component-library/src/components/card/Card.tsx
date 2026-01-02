import type { CardProps } from './Card.types';
import './Card.css';

export function Card({ children, className, onClick, interactive = false, ...rest }: CardProps) {
  const cardClasses = ['card', interactive && 'card--interactive', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.(e as any);
        }
      }}
      data-testid="card"
      {...rest}>
      {children}
    </div>
  );
}

export default Card;
