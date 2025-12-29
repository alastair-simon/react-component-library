import Card from './Card';
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

export const WithContent: Story = {
  render: () => (
    <Card>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '1.25em', fontWeight: 600 }}>Product Card</h3>
      <p style={{ margin: '0 0 16px 0', color: 'rgb(100, 116, 139)' }}>
        This card contains product information and details.
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: 'rgb(14, 103, 255)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
          Add to Cart
        </button>
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            color: 'rgb(14, 103, 255)',
            border: '1px solid rgb(14, 103, 255)',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
          View Details
        </button>
      </div>
    </Card>
  )
};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '1.25em', fontWeight: 600 }}>
          Clickable Card
        </h3>
        <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>
          This card is interactive and can be clicked. Hover to see the effect.
        </p>
      </div>
    )
  }
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <Card>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.125em', fontWeight: 600 }}>Card 1</h3>
        <p style={{ margin: 0, fontSize: '0.875em', color: 'rgb(100, 116, 139)' }}>
          First card content
        </p>
      </Card>
      <Card>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.125em', fontWeight: 600 }}>Card 2</h3>
        <p style={{ margin: 0, fontSize: '0.875em', color: 'rgb(100, 116, 139)' }}>
          Second card content
        </p>
      </Card>
      <Card>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.125em', fontWeight: 600 }}>Card 3</h3>
        <p style={{ margin: 0, fontSize: '0.875em', color: 'rgb(100, 116, 139)' }}>
          Third card content
        </p>
      </Card>
    </div>
  )
};

export const WithImage: Story = {
  render: () => (
    <Card>
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: 'rgb(226, 232, 240)',
          borderRadius: '6px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgb(148, 163, 184)'
        }}>
        Image Placeholder
      </div>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25em', fontWeight: 600 }}>Card with Image</h3>
      <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>
        This card includes an image placeholder at the top.
      </p>
    </Card>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
      <Card>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '1.25em', fontWeight: 600 }}>Default Card</h3>
        <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>This is a standard card component.</p>
      </Card>
      <Card interactive onClick={fn()}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '1.25em', fontWeight: 600 }}>
          Interactive Card
        </h3>
        <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>
          This card is clickable and interactive.
        </p>
      </Card>
    </div>
  )
};
