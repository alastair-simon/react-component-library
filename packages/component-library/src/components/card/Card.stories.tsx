import React from 'react';
import { Card } from './Card';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {
    interactive: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    onClick: fn()
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '1.25em', fontWeight: 600 }}>Card Title</h3>
        <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>
          This is a simple card component with some content inside.
        </p>
      </div>
    )
  }
};
