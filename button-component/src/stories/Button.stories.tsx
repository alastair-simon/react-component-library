import Button from "../button/Button";
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: 'primary',
  component: Button,
  argTypes: {
    variant: {
      options:['primary', 'secondary', 'critical'],
      control: {
        type: "select"
      }
    }
  },
  args:{
    onClick: fn(),
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant:"secondary",
  },
  render:(args) => {
   return <Button {...args}>Button</Button>
  }
};