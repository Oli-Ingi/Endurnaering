import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Nav, { Props } from "./Nav";

export default {
    title: 'Modules/Nav',
    component: Nav,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      lg: { type: 'boolean' },
    }
  } as Meta;

const Template: Story<Props> = props => <Nav {...props} />


export const Default = Template.bind({})
Default.args = {
    items: [
        { caption: "<Some text>" }
    ]
} as Props

export const TwoItems = Template.bind({})
TwoItems.args = {
    items: [
        { caption: "Bóka viðtal", to: "https://skra.is" },
        { caption: "Mæta í viðtal", to: "https://endurnaering.is" }
    ],
    lgMarginBetween: true 
} as Props


export const WithDropdown = Template.bind({})
WithDropdown.args = {
    items: [
        { caption: "Áherslur", to: "https://worldofwarcraft.com" },
        { caption: "Um okkur", links: [
            { caption: "Endurnæring", to: "https://worldofwarcraft.com" },
            { caption: "Starfsfólk", to: "https://worldofwarcraft.com" },
        ] },
    ],
    lgMarginBetween: true,
    thick: true
} as Props
