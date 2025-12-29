import React from 'react';
import Modal from './Modal';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

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
  },
  args: {
    onClose: fn()
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    children: (
      <div>
        <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>
          This is a simple modal with a title and content.
        </p>
      </div>
    )
  }
};
