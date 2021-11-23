import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Definition, { Props } from "./Definition";

export default {
    title: 'Modules/Definition',
    component: Definition,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
    }
} as Meta;

const Template: Story<Props> = props => <Definition {...props} />

export const Default = Template.bind({})
Default.args = {
    icon: "target",
    title: "Lorem ipsum",
    content: ["Lorem ipsum dolor sit amet", "lorem ipsum 2 dolor stuff"]
} as Props

