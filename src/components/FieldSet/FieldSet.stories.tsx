import { InputGroup } from "../InputGroup";
import { Radio } from "../Radio";
import { FieldSet } from "./FieldSet";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/FieldSet",
  component: FieldSet,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof FieldSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "FieldSets",
    children: (
      <InputGroup>
        <Radio name="options" value="1">
          Radio 1
        </Radio>
        <Radio name="options" value="2">
          Radio 2
        </Radio>
        <Radio name="options" value="3">
          Radio 3
        </Radio>
        <Radio name="options" value="4">
          Radio 4
        </Radio>
      </InputGroup>
    ),
  },
};
