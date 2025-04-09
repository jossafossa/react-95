import { Input } from "./Input";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta = {
  title: "ui/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  argTypes: {
    type: {
      options: ["text", "email", "password", "number"],
      control: { type: "select" },
    },
  },
  render: () => {
    const [{ value, onChange, ...props }, setArgs] =
      useArgs<ComponentProps<typeof Input>>();

    const handleChange = (value: string) => {
      setArgs({ value: value ?? undefined });

      onChange?.(value);
    };

    return <Input value={value} onChange={handleChange} {...props} />;
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    value: "Disabled Input",
    disabled: true,
  },
};

export const Number: Story = {
  args: {
    type: "number",
  },
};
export const NumberDisabled: Story = {
  args: {
    type: "number",
    disabled: true,
  },
};

export const WithOptions: Story = {
  args: {
    options: ["NL", "EN", "DE", "FR", "IT"],
  },
};

export const DisabledWithOptions: Story = {
  args: {
    value: "Disabled Input",
    disabled: true,
    options: ["NL", "EN", "DE", "FR", "IT"],
  },
};
