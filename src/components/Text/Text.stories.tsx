import { Text } from "./Text";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "internal/Text",
  component: Text,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
