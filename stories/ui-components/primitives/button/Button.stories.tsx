import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../../components/primitives/button";

const meta: Meta<typeof Button> = {
  title: "UI-Components/Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    action: "primary",
    children: "I am a button",
  },
};
