import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Button, { Props } from "./Button";

export default {
    title: 'Elements/Button',
    component: Button,
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
        keepColorOnHover: { type: 'boolean' }
    },
  } as Meta;


const template: Story<Props> = props => <Button {...props} />

export const Default = template.bind({})
Default.args = {
    children: "This is a button",
    onClick: () => console.log("Button was clicked")
} as Props

export const Secondary = template.bind({})
Secondary.args = {
    ...Default.args,
    variant: "secondary",
    keepColorOnHover: true
} as Props

export const White = template.bind({})
White.args = {
    ...Default.args,
    variant: "white",
    keepColorOnHover: true
} as Props

export const Link = template.bind({})
Link.args = {
    children: "This is a link to mbl",
    to: "https://mbl.is",
    newTab: true
} as Props

export const Small = template.bind({})
Small.args = {
    ...Default.args,
    sm: true
} as Props

export const Large = template.bind({})
Large.args = {
    ...Default.args,
    lg: true
} as Props



