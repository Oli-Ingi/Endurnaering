import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import List, { Props } from "./List"


export default {
    title: "Elements/List",
    component: List,
    parameters: {
        layout: "centered"
    },
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["bullet", "empty"]
            },
        horizontal: { type: "boolean" }
        },
    }
} as Meta;


const template: Story<Props> = args => <List {...args}>
    <li>lorem ipsum</li>
    <li>dolor sit</li>
    <li>amet</li>
</List>

export const Default = template.bind({})

export const Bullet = template.bind({})
Bullet.args = {
    variant: "bullet"
} as Props

export const Horizontal = template.bind({})
Horizontal.args = {
    horizontal: true
} as Props