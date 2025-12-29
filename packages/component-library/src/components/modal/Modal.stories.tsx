import { useState } from 'react';
import Modal from './Modal';
import Button from '../button/Button';
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

export const WithoutTitle: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>This modal doesn't have a title.</p>
      </div>
    )
  }
};

export const WithoutCloseButton: Story = {
  args: {
    isOpen: true,
    title: 'Modal Without Close Button',
    showCloseButton: false,
    children: (
      <div>
        <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>
          This modal doesn't have a close button. Click outside to close.
        </p>
      </div>
    )
  }
};

export const WithActions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action">
          <div>
            <p style={{ margin: '0 0 24px 0', color: 'rgb(100, 116, 139)' }}>
              Are you sure you want to perform this action? This cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
};

export const LongContent: Story = {
  args: {
    isOpen: true,
    title: 'Modal with Long Content',
    children: (
      <div>
        <p style={{ margin: '0 0 16px 0', color: 'rgb(100, 116, 139)' }}>
          This modal contains a lot of content to demonstrate scrolling behavior.
        </p>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 16px 0', color: 'rgb(100, 116, 139)' }}>
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    )
  }
};

export const WithForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Form Modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Contact Form">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.875em',
                    fontWeight: 500
                  }}>
                  Name
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '1px solid rgb(203, 213, 225)',
                    borderRadius: '6px',
                    fontSize: '1em'
                  }}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.875em',
                    fontWeight: 500
                  }}>
                  Email
                </label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '1px solid rgb(203, 213, 225)',
                    borderRadius: '6px',
                    fontSize: '1em'
                  }}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '0.875em',
                    fontWeight: 500
                  }}>
                  Message
                </label>
                <textarea
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '1px solid rgb(203, 213, 225)',
                    borderRadius: '6px',
                    fontSize: '1em',
                    minHeight: '100px',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Enter your message"
                />
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <Button variant="secondary" type="button" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
};

export const AllVariants: Story = {
  render: () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={() => setIsOpen1(true)}>
          Basic Modal
        </Button>
        <Button variant="primary" onClick={() => setIsOpen2(true)}>
          Modal with Actions
        </Button>
        <Button variant="primary" onClick={() => setIsOpen3(true)}>
          Modal without Title
        </Button>

        <Modal isOpen={isOpen1} onClose={() => setIsOpen1(false)} title="Basic Modal">
          <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>
            This is a basic modal with a title and close button.
          </p>
        </Modal>

        <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)} title="Modal with Actions">
          <div>
            <p style={{ margin: '0 0 24px 0', color: 'rgb(100, 116, 139)' }}>
              This modal includes action buttons.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="secondary" onClick={() => setIsOpen2(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen2(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>

        <Modal isOpen={isOpen3} onClose={() => setIsOpen3(false)}>
          <p style={{ margin: 0, color: 'rgb(100, 116, 139)' }}>This modal doesn't have a title.</p>
        </Modal>
      </div>
    );
  }
};
