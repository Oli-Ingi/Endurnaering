import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { mainTheme } from "../../../styles/themes";
import CourseCard, { Props } from "./CourseCard";

export default {
    title: 'Modules/CourseCard',
    component: CourseCard,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        color: { 
            control: { 
                type: 'select',
                options:  Object.keys(mainTheme.colors)
              }
          },
    }
  } as Meta;

const Template: Story<Props> = props => <CourseCard {...props} />


export const Default = Template.bind({})
Default.args = {
    title: "Hér er titill",
    description: "Hér er texti",
    lengthLabel: "lorem",
    length: "ipsum",
    type: "lorem ipsum"
} as Props

export const Blue = Template.bind({})
Blue.args = {
    ...Default.args,
    color: "blue"
} as Props

export const Design = Template.bind({})
Design.args = {
    title: "Versla í matinn",
    subtitle: "á heilbrigðan hátt",
    description: "Við lendum stundum í því að standa úti í búð og vitum ekkert hvað við eigum að kaupa",
    lengthLabel: "Lengd",
    length: "3 klst.",
    type: "Vefnámskeið"
} as Props