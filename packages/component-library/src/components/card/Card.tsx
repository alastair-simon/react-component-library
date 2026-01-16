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
      data-testid="card"
      {...rest}
    >
      {children}
    </div>
  );
}
