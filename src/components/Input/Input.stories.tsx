import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

// TODO: Implement Input
const meta = {
  title: "ui/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {
    type: {
      options: ["text", "email", "password"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithOptions: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    value: "Disabled Input",
    disabled: true,
  },
};
