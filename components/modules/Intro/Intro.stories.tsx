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
    title: "Njótum þess að borða!",
    content: ["Við veitum stuðning, ráðgjöf og fræðslu í átt að heilbrigðu sambandi við mat og jákvæða heilsu.", "Fáðu aðstoð hjá löggildum næringarfræðingi til að ná þínum markmiðum."],
    width: 470,
    animate: true
} as Props