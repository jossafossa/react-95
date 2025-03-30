import React from "react";
import { Root } from "../../src/components";

export const RootDecorator = (Story) => {
  return (
    <Root>
      <div
        style={{
          backgroundColor: "var(--background)",
          boxShadow: "var(--border)",
          padding: "20px",
          zoom: "2",
        }}
      >
        <Story />
      </div>
    </Root>
  );
};
