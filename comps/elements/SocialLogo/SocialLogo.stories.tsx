import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import SocialLogo, { Props } from "./SocialLogo";

export default {
    title: 'Elements/SocialLogo',
    component: SocialLogo,
    parameters: {
        layout: 'centered'
    },
  } as Meta;

const Template: Story<Props> = props => <SocialLogo {...props} />

export const Default = Template.bind({})
Default.args = {
    src: "/facebook_icon.png",
    to: "https://www.facebook.com/endurnaering"
} as Props
