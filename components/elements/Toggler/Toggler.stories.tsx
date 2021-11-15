import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Toggler, { Props } from "./Toggler";

export default {
    title: 'Elements/Plus',
    component: Toggler,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "white"]
            }
        },
    }
  } as Meta;

const Template: Story<Props> = props => <Toggler {...props} />

export const Default = Template.bind({})
Default.args = {

} as Props