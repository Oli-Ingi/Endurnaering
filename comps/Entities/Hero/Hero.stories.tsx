import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Hero, { Props } from "./Hero";

export default {
    title: 'Entities/Hero',
    component: Hero,
    parameters: {
        layout: 'fullscreen'
    },
  } as Meta;

const Template: Story<Props> = props => <Hero {...props} />

export const Default = Template.bind({})
Default.args = {
    intro: {
        title: "Hér er titill",
        content: ["Hér er texti"]
    },
    img: "/melonu_barn.png"
} as Props


export const Realistic = Template.bind({})
Realistic.args = {
    intro: {
        title: "Njótum þess að borða!",
        content: [
            "Endurnæring veitir stuðning, ráðgjöf og fræðslu í átt að heilbrigðu sambandi við mat og jákvæða heilsu.",
            "Fáðu aðstoð hjá löggildum næringarfræðingi við að ná þínum markmiðum."
        ]
    },
    img: "/Upphafsmynd3.svg"
} as Props