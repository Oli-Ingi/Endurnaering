import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import ListNav, { Props } from "./ListNav";

export default {
    title: 'Entities/ListNav',
    component: ListNav,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      variant: { 
        control: { 
            type: 'radio',
            options: ["primary", "secondary", "white"]
          }
      }
    },
  } as Meta;

const Template: Story<Props> = props => <ListNav {...props} />

export const Default = Template.bind({})
Default.args = {
    navItems: [
        { 
            title: "Þjónustuleiðir", 
            links: [
                { caption: "Staðviðtöl", to: "https://visir.is" },
                { caption: "Fjarviðtöl", to: "https://visir.is" },
                { caption: "Námskeið", to: "https://visir.is" },
                { caption: "Fyrirlestrar", to: "https://visir.is" },
            ]
        },
        {
            title: "Fræðsla",
            links: [
                { caption: "Venjur", to: "https://visir.is" },
                { caption: "Innsæi", to: "https://visir.is" },
                { caption: "Næring", to: "https://visir.is" }
            ]
        },
        {
            title: "Um okkur",
            links: [
                { caption: "Endurnæring", to: "https://visir.is" },
                { caption: "Starfsfólk", to: "https://visir.is" }
            ]
        },
    ]
} as Props

export const AnimatedLinks = Template.bind({})
AnimatedLinks.args = {
    ...Default.args,
    animateLinks: true
} as Props