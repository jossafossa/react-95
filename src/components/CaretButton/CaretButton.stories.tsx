import { fn } from "@storybook/test";
import { CaretButton } from "./CaretButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "internal/CaretButton",
  component: CaretButton,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof CaretButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
  },
};

export const Up: Story = {
  args: {
    onClick: fn(),
    direction: "up",
  },
};
