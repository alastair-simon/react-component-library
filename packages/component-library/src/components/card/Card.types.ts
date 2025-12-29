import React from 'react';

export interface CardProps {
  /**
   * Children content
   */
  children: React.ReactNode;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Makes the card clickable/interactive
   */
  interactive?: boolean;
}
