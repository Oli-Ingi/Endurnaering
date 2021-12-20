import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import SocialMedia, { Props } from "./SocialMedia";

export default {
    title: 'Modules/SocialMedia',
    component: SocialMedia,
    parameters: {
        layout: 'centered'
    },
  } as Meta;

const Template: Story<Props> = props => <SocialMedia {...props} />

export const Default = Template.bind({})
Default.args = {
    logos: [
        {
            icon: "facebook",
            to: "https://www.facebook.com/endurnaering",
        },
        {
            icon: "instagram",
            to: "https://www.instagram.com/endurnaering/",
        },
        {
            icon: "linkedIn",
            to: "https://www.instagram.com/endurnaering/",
        }
    ]
} as Props