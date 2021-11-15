import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Article, { Props } from "./Article";

export default {
    title: 'Modules/Article',
    component: Article,
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
      darkBg: { type: "boolean" }
    },
  } as Meta;

const Template: Story<Props> = props => <Article {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Þetta er titill",
    content: ["Hérna er eitthvað content um eitthvað merkilegt concept."]
} as Props


export const WithButton = Template.bind({})
WithButton.args = {
    ...Default.args,
    button: {
        caption: "Lesa meira",
        to: "https://visir.is",
        newTab: true
    }
} as Props


export const Secondary = Template.bind({})
Secondary.args = {
    ...WithButton.args,
    variant: "secondary",
} as Props

export const White = Template.bind({})
White.args = {
    ...WithButton.args,
    variant: "white",
} as Props

export const DarkBg = Template.bind({})
DarkBg.args = {
    ...WithButton.args,
    darkBg: true
} as Props
