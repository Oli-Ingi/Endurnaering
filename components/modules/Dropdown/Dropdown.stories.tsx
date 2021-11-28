import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Dropdown, { Props } from "./Dropdown";

export default {
    title: 'Modules/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        title: { type: "string" },
    }
  } as Meta;

const Template: Story<Props> = props => <div style={{ padding: "5rem", border: "1px solid black" }}>
    <Dropdown {...props} />
</div>


export const Default = Template.bind({})
Default.args = {
    title: "Hér er titill",
    links: [
        { caption: "Hér er linkur 1", to: "https://worldofwarcraft.com" },
        { caption: "Hér er linkur 2", to: "https://worldofwarcraft.com" },
        { caption: "Hér er linkur 3", to: "https://worldofwarcraft.com" },
    ]
} as Props