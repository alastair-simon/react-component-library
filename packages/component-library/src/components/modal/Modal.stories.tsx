import React, { useState } from 'react';
import Modal from './Modal';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean'
      }
    },
    showCloseButton: {
      control: {
        type: 'boolean'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
          <div>
            <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>
              This is a simple modal with a title and content.
            </p>
          </div>
        </Modal>
      </>
    );
  }
};
