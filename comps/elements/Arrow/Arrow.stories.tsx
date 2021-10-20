import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Arrow, { Props } from "./Arrow";

export default {
    title: 'Elements/Arrow',
    component: Arrow,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      variant: { 
          control: { 
              type: 'radio',
              options: ["primary", "secondary", "white"]
            }
        },
        length: { type: "number" },
        right: { type: "boolean" }
    },
  } as Meta;


const template: Story<Props> = args => <Arrow {...args} />

export const Default = template.bind({})
Default.args = {
} as Props

export const Secondary = template.bind({})
Secondary.args = {
    ...Default.args,
    variant: "secondary",
} as Props

export const Short = template.bind({})
Short.args = {
    length: 35
} as Props

export const Right = template.bind({})
Right.args = {
    right: true
} as Props
