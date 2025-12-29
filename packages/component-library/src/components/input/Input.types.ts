import type { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The size of the input
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Label text for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
}
