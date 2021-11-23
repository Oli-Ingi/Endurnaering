import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Intro, { Props } from "./Intro";

export default {
    title: 'Modules/Intro',
    component: Intro,
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
      shadow: { type: "boolean" },
      round: { type: "boolean" },
      animate: { type: "boolean" },
      width: { type: "number" }
    },
  } as Meta;

const Template: Story<Props> = props => <Intro {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Hér er titill",
    content: ["Hér er content"],
    animate: true
} as Props

export const WithSub = Template.bind({})
WithSub.args = {
    ...Default.args,
    subtitle: "undirtitill"
}

export const WithButton = Template.bind({})
WithButton.args = {
    ...WithSub.args,
    onButtonClick: () => console.log("button clicked"),
    buttonIcon: "play",
    buttonCaption: "Hér er takki"
} as Props

export const Primary = Template.bind({})
Primary.args = {
    ...Default.args,
    variant: "primary"
} as Props

export const Round = Template.bind({})
Round.args = {
    ...Default.args,
    round: true
} as Props

export const Shadow = Template.bind({})
Shadow.args = {
    ...Default.args,
    shadow: true
} as Props

export const Realistic = Template.bind({})
Realistic.args = {
    title: "Njótum þess",
    subtitle: "að borða",
    content: ["Við veitum ráðgjöf, stuðning og fræðslu í átt að heilbrigðu sambandi við mat og jákvæðri heilsu."],
    width: 470,
    onButtonClick: () => console.log("button clicked"),
    buttonIcon: "play",
    buttonCaption: "Horfa á kynningarmyndband"
} as Props

