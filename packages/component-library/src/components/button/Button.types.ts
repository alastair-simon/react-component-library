import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'critical';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
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
  children: React.ReactNode;
  /**
   * Click handler
   **/
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  icon?: React.ReactNode;
  /**
   * Icon to display after the button text
   **/
  iconEnd?: React.ReactNode;
  /**
   * Makes the button full width
   **/
  fullWidth?: boolean;
}
