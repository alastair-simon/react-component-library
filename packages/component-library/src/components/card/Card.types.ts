import type { ReactNode, MouseEvent } from 'react';

export interface CardProps {
  /**
   * Children content
   */
  children: ReactNode;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * Makes the card clickable/interactive
   */
  interactive?: boolean;
}
