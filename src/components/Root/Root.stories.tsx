import { Root } from "./Root";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/Root",
  component: Root,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
