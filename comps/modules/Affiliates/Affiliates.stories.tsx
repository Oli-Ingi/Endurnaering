import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Affiliates, { Props } from "./Affiliates";

export default {
    title: 'Modules/Affiliates',
    component: Affiliates,
    parameters: {
        layout: 'centered'
    },
} as Meta;

const Template: Story<Props> = props => <Affiliates {...props} />

export const Default = Template.bind({})
Default.args = {
    logos: [
        { img: "/Embaetti_landlaeknis.png", to: "https://www.landlaeknir.is/", alt: "Embætti landlæknis" },
        { img: "/mni.png", to: "http://www.mni.is", alt: "MNI" }
    ]
} as Props

export const Small = Template.bind({})
Small.args = {
    ...Default.args,
    height: 50
} as Props