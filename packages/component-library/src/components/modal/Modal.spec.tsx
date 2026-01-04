import { describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  test('The modal does not render when isOpen is false', async () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()}>
        Modal content
      </Modal>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('modal')).toBeNull();
    });
  });

  test('The modal renders when isOpen is true', async () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        Modal content
      </Modal>
    );

    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeDefined();
      expect(screen.getByText('Modal content')).toBeDefined();
    });
  });

  test('The modal displays a title when provided', async () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Test Modal">
        Modal content
      </Modal>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Modal')).toBeDefined();
    });
  });

  test('The modal shows close button by default', async () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        Modal content
      </Modal>
    );

    await waitFor(() => {
      expect(screen.getByLabelText('Close modal')).toBeDefined();
    });
  });
});
