import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";
import Icon from "../Icon/Icon";
import Link, { Props } from "./Link";

export default {
    title: 'Elements/Link',
    component: Link,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: { 
            control: { 
                type: 'radio',
                options: ["primary", "secondary"]
            }
        },
        keepColorOnHover: { type: 'boolean' },
        bold: { type: 'boolean' },
        permaLine: { type: 'boolean' },
        iconRight: { type: "boolean" }
    },
    
  } as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = props => <Link {...props} />

export const Default = Template.bind({})
Default.args = {
    to: "https://visir.is",
    children: "Hlekkur á vísi"
} as Props

export const Primary = Template.bind({})
Primary.args = {
    ...Default.args,
    variant: "primary"
} as Props

export const Secondary = Template.bind({})
Secondary.args = {
    ...Default.args,
    variant: "secondary"
} as Props


export const PermaLine = Template.bind({})
PermaLine.args = {
    ...Default.args,
    permaLine: true
} as Props

export const WithIcon = Template.bind({})
WithIcon.args = {
    ...Default.args,
    icon: <Icon type="play" />,
    variant: "primary"
} as Props