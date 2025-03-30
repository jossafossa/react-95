import { fn } from "@storybook/test";
import { ArrowButton } from "./Button";
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
