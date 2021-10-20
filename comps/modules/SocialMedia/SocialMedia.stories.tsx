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
            src: "/facebook_icon.png",
            to: "https://www.facebook.com/endurnaering",
            alt: "facebook"
        },
        {
            src: "/instagram_icon.png",
            to: "https://www.instagram.com/endurnaering/",
            alt: "instagram"
        }   
    ]
} as Props