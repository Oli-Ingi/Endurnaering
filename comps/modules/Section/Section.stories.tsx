import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Section, { Props } from "./Section";

export default {
    title: 'Modules/Section',
    component: Section,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
      variant: { 
        control: { 
            type: 'radio',
            options: ["primary", "secondary", "white"]
          }
      },
    }
  } as Meta;

const Template: Story<Props> = props => <Section {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Hér er section titill",
    children: <div>...Hér koma börnin...</div>
} as Props

export const Secondary = Template.bind({})
Secondary.args = {
    ...Default.args,
    title: "Ummæli",
    variant: "secondary"
} as Props