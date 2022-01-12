
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Header, { Props } from "./Header";

export default {
    title: 'Entities/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen'
    },
  } as Meta;

const Template: Story<Props> = props => <Header {...props} />

export const Default = Template.bind({})
Default.args = {
    navItems: [
        { caption: "Áherslur", to: "https://visir.is" },
        { caption: "Um okkur", links: [
            { caption: "Endurnæring", to: "https://worldofwarcraft.com" },
            { caption: "Starfsfólk", to: "https://worldofwarcraft.com" },
            { caption: "Skilmálar", to: "https://worldofwarcraft.com" },
        ] }
    ],
    interview: {
        attend: {
            caption: "Mæta í viðtal",
            to: "https://app.karaconnect.com/login?cid=1115"
        },
        book: {
            caption: "Bóka viðtal",
            to: "https://app.karaconnect.com/company/1115/registration?auth=2"
        },
        title: "Viðtöl"
    }
} as Props


export const WithShadow = Template.bind({})
WithShadow.args = {
    ...Default.args,
    shadow: true
} as Props