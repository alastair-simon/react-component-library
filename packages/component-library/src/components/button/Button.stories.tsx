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
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    loading: {
      control: {
        type: 'boolean'
      }
    },
    fullWidth: {
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
};

export const Critical: Story = {
  args: {
    children: 'Button',
    variant: 'critical'
  }
};

export const Sizes: Story = {
  args: {
    variant: 'primary'
  },

  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
      <Button variant="primary" size="large">
        Large
      </Button>
    </div>
  )
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="primary" disabled>
        Disabled Primary
      </Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
      <Button variant="critical" disabled>
        Disabled Critical
      </Button>
    </div>
  )
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="primary" loading>
        Loading
      </Button>
      <Button variant="secondary" loading>
        Loading
      </Button>
      <Button variant="critical" loading>
        Loading
      </Button>
    </div>
  )
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary" icon="✓">
        With Icon
      </Button>
      <Button variant="secondary" iconEnd="→">
        With End Icon
      </Button>
      <Button variant="primary" icon="✓" iconEnd="→">
        Both Icons
      </Button>
    </div>
  )
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Button variant="primary" fullWidth>
        Full Width Button
      </Button>
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="critical">Critical</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button variant="primary" size="small">
          Small
        </Button>
        <Button variant="primary" size="medium">
          Medium
        </Button>
        <Button variant="primary" size="large">
          Large
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="primary" loading>
          Loading
        </Button>
      </div>
    </div>
  )
};
