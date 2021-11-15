import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import LinkList, { Props } from "./LinkList";

export default {
    title: 'Modules/LinkList',
    component: LinkList,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      variant: { 
        control: { 
            type: 'radio',
            options: ["primary", "secondary", "white"]
          }
      },
      animate: { type: "boolean" }
    },
  } as Meta;

const Template: Story<Props> = props => <LinkList {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Titill",
    links: [
        { caption: "warcraft forums", to: "https://warcraft-forums.eu" },
        { caption: "warcract support", to:"https://support.worldofwarcraft.eu" }
    ]
} as Props

export const AnimatedLinks = Template.bind({})
AnimatedLinks.args = {
    ...Default.args,
    animate: true
} as Props 

export const Realistic = Template.bind({})
Realistic.args = {
    title: "Þjónustuleiðir",
    links: [
        { caption: "Staðviðtöl", to: "https://visiri.is" },
        { caption: "Fjarviðtöl", to: "https://visir.is" },
        { caption: "Námskeið", to: "https://visir.is" },
        { caption: "Fyrirlestrar", to: "https://visir.is" },
    ],
    animate: true
} as Props