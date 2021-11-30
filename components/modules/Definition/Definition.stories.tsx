import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { mainTheme } from "../../../styles/themes";
import Definition, { Props } from "./Definition";

export default {
    title: 'Modules/Definition',
    component: Definition,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        icon: {
            control: {
                type: "select",
                options: ["play", "target", "chat", "chart", "recycle", "like", "heart", "suitcase", "lightning", "sun", "mic", "person", "reward"]
            }
        },
        color: {
            control: {
                type: "select", options: Object.keys(mainTheme.colors)
            }
        },
        border: { type: "boolean" },
        iconRight: { type: "boolean" },
        justIconColor: { type: "boolean" }
    }
} as Meta;

const Template: Story<Props> = props => <Definition {...props} />

export const Default = Template.bind({})
Default.args = {
    icon: "target",
    title: "Lorem ipsum",
    children: "Lorem ipsum dolor sit amet"
} as Props

export const Yellow = Template.bind({})
Yellow.args = {
    ...Default.args,
    color: "tertiary"
} as Props

export const Bordered = Template.bind({})
Bordered.args = {
    ...Default.args,
    color: "blue",
    border: true
} as Props