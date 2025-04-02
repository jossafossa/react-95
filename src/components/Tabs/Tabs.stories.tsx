import { PropsWithChildren } from "react";
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
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const Content = ({ children }: PropsWithChildren) => (
  <div style={{ padding: "1rem" }}>{children}</div>
);

export const Default: Story = {
  args: {
    children: (
      <Tabs initialActiveTab="tab1">
        <Tabs.Menu>
          <Tabs.Item name="tab1">Tab 1</Tabs.Item>
          <Tabs.Item name="tab2">Tab 2</Tabs.Item>
          <Tabs.Item name="tab3">Tab 3</Tabs.Item>
        </Tabs.Menu>

        <Tabs.Panels>
          <Tabs.Panel name="tab1">
            <Content>Content for Tab 1</Content>
          </Tabs.Panel>
          <Tabs.Panel name="tab2">
            <Content>Content for Tab 2</Content>
          </Tabs.Panel>
          <Tabs.Panel name="tab3">
            <Content>Content for Tab 3</Content>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    ),
  },
};
