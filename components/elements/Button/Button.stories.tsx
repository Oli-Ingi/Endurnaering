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
                options: ["normal", "ghost"]
            }
        },
        color: { 
            control: { 
                type: 'radio',
                options: ["primary", "secondary", "white"]
              }
          },
        keepColorOnHover: { type: 'boolean' },
        sm: { type: "boolean" },
        lg: { type: "boolean" }
    },
  } as Meta;


const template: Story<Props> = props => <Button {...props} />

export const Default = template.bind({})
Default.args = {
    children: "This is a button",
    onClick: () => alert("Button clicked!")
} as Props

export const Ghost = template.bind({})
Ghost.args = {
    ...Default.args,
    variant: "ghost"
} as Props

export const Secondary = template.bind({})
Secondary.args = {
    ...Default.args,
    color: "secondary",
    keepColorOnHover: true
} as Props

export const White = template.bind({})
White.args = {
    ...Default.args,
    color: "white",
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



