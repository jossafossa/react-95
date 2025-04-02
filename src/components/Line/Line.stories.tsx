import { Line } from "./Line";
import type { Meta, StoryObj } from "@storybook/react";

// TODO: Implement Line
const meta = {
  title: "ui/Line",
  component: Line,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "200px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Line>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
