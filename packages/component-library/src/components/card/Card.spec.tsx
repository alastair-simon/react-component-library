import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('The card renders', async () => {
    render(<Card>Card content</Card>);
    await waitFor(() => {
      expect(screen.getByTestId('card')).toBeDefined();
    });
  });

  test('The card displays children content', async () => {
    render(<Card>Card content</Card>);
    await waitFor(() => {
      expect(screen.getByText('Card content')).toBeDefined();
    });
  });

  test('The card is interactive when interactive prop is true', async () => {
    render(<Card interactive>Interactive card</Card>);

    await waitFor(() => {
      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('role', 'button');
      expect(card).toHaveAttribute('tabIndex', '0');
    });
  });
});
