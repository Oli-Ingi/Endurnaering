import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Container, { Props } from "./Container";

export default {
    title: 'Elements/Container',
    component: Container,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
      variant: { 
          control: { 
              type: 'radio',
              options: ["primary", "secondary", "white"]
            }
        },
        noPad: { type: "boolean" }
    },
  } as Meta;


const template: Story<Props> = args => <Container {...args} />

export const Default = template.bind({})
Default.args = {
    children: <div>Some div</div>
} as Props

export const Secondary = template.bind({})
Secondary.args = {
    ...Default.args,
    variant: "secondary",
} as Props

export const WithGreenDiv = template.bind({})
WithGreenDiv.args = {
    variant: "white",
    children: <div style={{ backgroundColor: "green", color: "white", height: 100 }}>Here is a green div</div>
} as Props

