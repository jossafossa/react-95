import { fn } from "@storybook/test";
import { ArrowButton } from "./ArrowButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "internal/ArrowButton",
  component: ArrowButton,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArrowButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    onClick: fn(),
    disabled: true,
  },
};
