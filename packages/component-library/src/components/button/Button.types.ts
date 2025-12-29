import type { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'critical';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /**
   * The variant of the button
   **/
  variant: ButtonVariant;
  /**
   * The size of the button
   * @default 'medium'
   **/
  size?: ButtonSize;
  /**
   * Children prop
   **/
  children: ReactNode;
  /**
   * Click handler
   **/
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Controls if the button is disabled
   **/
  disabled?: boolean;
  /**
   * Shows a loading state
   **/
  loading?: boolean;
  /**
   * Icon to display before the button text
   **/
  icon?: ReactNode;
  /**
   * Icon to display after the button text
   **/
  iconEnd?: ReactNode;
  /**
   * Makes the button full width
   **/
  fullWidth?: boolean;
}
