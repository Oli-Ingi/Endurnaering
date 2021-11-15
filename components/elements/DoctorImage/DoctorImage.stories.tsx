import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import DoctorImage, { Props } from "./DoctorImage";

export default {
    title: 'Elements/DoctorImage',
    component: DoctorImage,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      scale: { type: 'number' }
    },
  } as Meta;

const Template: Story<Props> = props => <DoctorImage {...props} />

export const Default = Template.bind({})

export const ScaledTwo = Template.bind({})
ScaledTwo.args = {
    scale: 2
} as Props