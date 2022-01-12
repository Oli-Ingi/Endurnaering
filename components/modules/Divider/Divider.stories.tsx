import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Divider, { Props } from "./Divider";

export default {
    title: 'Modules/Divider',
    component: Divider,
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
      size: {
          control: {
              type: "radio",
              options: ["sm", "lg"]
          }
      }
    },
  } as Meta;

const Template: Story<Props> = props => <Divider {...props} />

export const Default = Template.bind({})
Default.args = {
    values: [
        { caption: "Text 1" },
        { caption: "Link 1", to: "https://stackoverflow.com", newTab: true },
        { caption: "Text 2" }
    ]
} as Props

export const Primary = Template.bind({})
Primary.args = {
    ...Default.args,
    variant: "primary"
} as Props

export const Large = Template.bind({})
Large.args = {
    ...Default.args,
    size: "lg"
} as Props

export const Small = Template.bind({})
Small.args = {
    ...Default.args,
    size: "sm"
} as Props