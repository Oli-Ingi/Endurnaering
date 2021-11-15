import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Line, { Props } from "./Line";

export default {
    title: 'Elements/Line',
    component: Line,
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
        animate: { type: "boolean" },
        delay: { type: "boolean" }
    },
  } as Meta;


const template: Story<Props> = props => 
    <div style={{ width: 300, padding: "2em 0", border: "1px solid black" }}>
        <span style={{ marginBottom: 50 }}>300px div</span>
        <Line {...props} />
    </div>

export const Default = template.bind({})
Default.args = {} as Props

export const Secondary = template.bind({})
Secondary.args = {
    variant: "secondary",
} as Props


export const Animated = template.bind({})
Animated.args = {
    animate: true,
    delay: 1
} as Props