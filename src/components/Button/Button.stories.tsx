import { fn } from "@storybook/test";
import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";

const meta = {
  title: "ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>Button</Text>,
    onClick: fn(),
  },
};

export const DisabledButton: Story = {
  args: {
    children: <Text>Button</Text>,
    onClick: fn(),
    disabled: true,
  },
};

export const LoadingButton: Story = {
  args: {
    children: <Text>Button</Text>,
    onClick: fn(),
    loading: true,
  },
};
