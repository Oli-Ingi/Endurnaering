import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Logo, { Props } from "./Logo";

export default {
    title: 'Elements/Logo',
    component: Logo,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: { 
            control: { 
                type: 'radio',
                options: ["primary", "transparent"]
            }
        },
        height: { type: 'number' }
    },
  } as Meta;

const Template: Story<Props> = props => <Logo {...props} />

export const Default = Template.bind({}) // primary


export const Secondary = Template.bind({})
Secondary.args = {
    variant: "transparent"
} as Props