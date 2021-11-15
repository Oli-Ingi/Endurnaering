import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import PeopleImg, { Props } from "./PeopleImg";

export default {
    title: 'Elements/PeopleImg',
    component: PeopleImg,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      scale: { type: 'number' }
    },
  } as Meta;

const Template: Story<Props> = props => <PeopleImg {...props} />

export const Default = Template.bind({})

export const ScaledTwo = Template.bind({})
ScaledTwo.args = {
    scale: 2
} as Props