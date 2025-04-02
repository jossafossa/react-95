import { Tabs } from "./Tabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Tabs.Items>
        <Tabs.Item>Tab 1</Tabs.Item>
        <Tabs.Item>Tab 2</Tabs.Item>
        <Tabs.Item>Tab 3</Tabs.Item>
      </Tabs.Items>,

      <Tabs.Panels>
        <Tabs.Panel>Content for Tab 1</Tabs.Panel>
        <Tabs.Panel>Content for Tab 2</Tabs.Panel>
        <Tabs.Panel>Content for Tab 3</Tabs.Panel>
      </Tabs.Panels>,
    ],
  },
};
