import { useState } from "react";
import { Range } from "./Range";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

// TODO: Implement Range
const meta = {
  title: "ui/Range",
  component: Range,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},

  // use args
  decorators: [
    (Story) => {
      const [{ value, min, max }, updateArgs] = useArgs();
      const [rangeValue, setRangeValue] = useState(value);

      return (
        <div style={{ width: "300px" }}>
          <Story
            value={rangeValue}
            min={min}
            max={max}
            onChange={(e) => {
              setRangeValue(Number(e.target.value));
              updateArgs({ value: Number(e.target.value) });
            }}
          />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Range>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
  },
};

export const WithSteps: Story = {
  args: {
    value: 50,
    step: 10,
    min: 0,
    max: 100,
  },
};
