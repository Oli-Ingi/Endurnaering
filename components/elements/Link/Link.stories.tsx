import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
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
        lined: { type: 'boolean' },
        border: { type: 'boolean' },
    },
  } as Meta;

const Template: Story<Props> = props => <Link {...props} />

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

export const Bordered = Template.bind({})
Bordered.args = {
    ...Default.args,
    border: true,
} as Props

export const Lined = Template.bind({})
Lined.args = {
    ...Default.args,
    lined: true
} as Props

export const AnimatedLine = Template.bind({})
AnimatedLine.args = {
    ...Default.args,
    animatedLine: true
} as Props