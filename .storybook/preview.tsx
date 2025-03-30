import type { Preview } from "@storybook/react";
import { RootDecorator } from "./decorators/RootDecorator";
import "./global.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [RootDecorator]; // <-- provide theme/CSS always
