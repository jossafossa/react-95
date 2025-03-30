import { Radio } from "./Radio";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Radio",
  },
};

export const Disabled: Story = {
  args: {
    children: "Radio",
    disabled: true,
  },
};
