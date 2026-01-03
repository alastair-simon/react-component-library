import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  test('The input renders', async () => {
    render(<Input />);
    await waitFor(() => {
      expect(screen.getByTestId('input')).toBeDefined();
    });
  });

  test('The input displays a label when provided', async () => {
    render(<Input label="Email address" />);
    await waitFor(() => {
      expect(screen.getByText('Email address')).toBeDefined();
    });
  });

  test('The input displays an error message when error prop is provided', async () => {
    render(<Input error="This field is required" />);
    await waitFor(() => {
      expect(screen.getByText('This field is required')).toBeDefined();
      expect(screen.getByTestId('input')).toHaveAttribute('aria-invalid', 'true');
    });
  });

  test('The input displays helper text when helperText prop is provided', async () => {
    render(<Input helperText="Enter your email address" />);
    await waitFor(() => {
      expect(screen.getByText('Enter your email address')).toBeDefined();
    });
  });
});
