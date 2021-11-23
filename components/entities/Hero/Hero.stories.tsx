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
    title: "Hér er titill",
    content: ["Hér er texti"],
    img: "/melonu_barn.png",
    buttonCaption: "Horfa á kynningarmyndband"
} as Props

export const WithSub = Template.bind({})
WithSub.args = {
    ...Default.args,
    subtitle: "og meira",
} as Props

export const Realistic = Template.bind({})
Realistic.args = {
    title: "Njótum þess",
    subtitle: "að borða",
    content: [
        "Við veitum ráðgjöf, stuðning og fræðslu í átt að heilbrigðu sambandi við mat og jákvæðri heilsu."
    ],
    img: "/melonu_barn.png",
    buttonCaption: "Horfa á kynningarmyndband"
} as Props