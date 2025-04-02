import { Range } from './Range';
import type { Meta, StoryObj } from '@storybook/react';

// TODO: Implement Range
const meta = {
  title: 'ui/Range',
  component: Range,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Range>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
