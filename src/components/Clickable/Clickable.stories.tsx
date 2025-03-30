import { Clickable } from "./Clickable";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "internal/Clickable",
  component: Clickable,
  args: {
    children: "Clickable",
  },
  argTypes: {
    onClick: { action: fn() },
    to: { control: { type: "text" } },
  },
} satisfies Meta<typeof Clickable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithTo: Story = {
  args: {
    to: "/to",
  },
};

export const WithOnClick: Story = {
  args: {
    onClick: fn(),
  },
};
