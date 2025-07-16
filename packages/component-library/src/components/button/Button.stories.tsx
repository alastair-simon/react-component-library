import Button from './Button';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'critical'],
      control: {
        type: 'select'
      }
    }
  },
  args: {
    onClick: fn()
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary'
  },
  render: (args) => {
    return <Button {...args}>Button</Button>;
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  },
  render: (args) => {
    return <Button {...args}>Button</Button>;
  }
};

export const Critical: Story = {
  args: {
    children: 'Button',
    variant: 'critical'
  },
  render: (args) => {
    return <Button {...args}>Button</Button>;
  }
};
