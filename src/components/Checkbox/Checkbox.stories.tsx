import { Checkbox } from "./Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Checkbox",
  },
};

export const Disabled: Story = {
  args: {
    children: "Checkbox",
    disabled: true,
  },
};
