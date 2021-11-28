import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { mainTheme } from "../../../styles/themes";
import Text, { Props } from "./Text";

export default {
    title: 'Elements/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      thick: { type: 'boolean' },
      bold: { type: 'boolean' },
      italic: { type: 'boolean' },
      caps: { type: 'boolean' },
      color: { 
        control: { 
            type: 'select',
            options:  Object.keys(mainTheme.colors)
          }
      },
      size: { 
        control: { 
            type: 'radio',
            options: ["xs", "sm", "med", "lg", "xl", "xxl"]
          }
      },
      as: {
          control: {
              type: 'select',
              options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small", "strong", "em", "span"]
          }
      }
    },
  } as Meta;

const Template: Story<Props> = props => <Text {...props} />

export const Default = Template.bind({})
Default.args = {
    children: "This is a text paragraph"
} as Props

export const Primary = Template.bind({})
Primary.args = {
    ...Default.args,
    color: "primary"
} as Props

export const Thick = Template.bind({})
Thick.args = {
    ...Default.args,
    thick: true
} as Props

export const Bold = Template.bind({})
Bold.args = {
    ...Default.args,
    bold: true
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