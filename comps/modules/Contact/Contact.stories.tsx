import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Contact, { Props } from "./Contact";

export default {
    title: 'Modules/Contact',
    component: Contact,
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

const Template: Story<Props> = props => <Contact {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Titill",
    tel: {
        caption: "5 771 771",
        link: "tel:5771771"
    },
    hours: {
        desc: "Hægt að hringja blabla",
        period: "06:15 - 12:34"
    },
    email: "Stebbi@WorldOfWarcraftNoobs.com",
} as Props

export const Realistic = Template.bind({})
Realistic.args = {
    title: "Hafðu samband",
    tel: {
        caption: "5 771 771",
        link: "tel:5771771"
    },
    hours: {
        desc: "Hægt að hringja í okkur alla virka daga á milli",
        period: "9:00 - 16:00"
    },
    email: "endurnaering@endurnaering.is",
} as Props