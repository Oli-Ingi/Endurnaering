import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Arrows, { Props } from "./Arrows";

export default {
    title: 'Modules/Arrows',
    component: Arrows,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        width: { type: "number" }
    }
} as Meta;

const Template: Story<Props> = props => <Arrows {...props} />

export const Default = Template.bind({})
Default.args = {
    
} as Props

export const Wide = Template.bind({})
Wide.args = {
    width: 500
} as Props
