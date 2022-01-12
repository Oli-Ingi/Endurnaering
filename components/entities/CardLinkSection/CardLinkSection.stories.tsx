import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import CardLinkSection, { Props } from "./CardLinkSection";

export default {
    title: 'Entities/CardLinkSection',
    component: CardLinkSection,
    parameters: {
        layout: 'fullscreen'
    },
  } as Meta;

const Template: Story<Props> = props => <CardLinkSection {...props} />

export const Default = Template.bind({})
Default.args = {
  links: [
    { 
      icon: "person", 
      title: "Lorem ipsum", 
      description: "Lorem ipsum dolor sit amet",
      hoverColor: "red",
      href: "www.mbl.is"
    }
  ],
  title: "Lorem ipsum"
} as Props


export const Design = Template.bind({})
Design.args = {
  links: [
    { 
      icon: "person", 
      title: "Einstaklingsviðtöl", 
      description: "Sérsniðin næringarráðgjöf",
      hoverColor: "tertiary",
      href: "/vidtol"
    },
    { 
      icon: "reward", 
      title: "Námskeið", 
      description: "Endurnærandi lausnir",
      hoverColor: "red",
      href: "/vidtol"
    },
    { 
      icon: "mic", 
      title: "Fyrirlestrar", 
      description: "Fræðsla og innblástur",
      hoverColor: "blue",
      href: "/vidtol"
    },
  ]
}
