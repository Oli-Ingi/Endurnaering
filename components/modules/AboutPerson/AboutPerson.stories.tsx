import { Story, Meta } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import AboutPerson, { Props } from "./AboutPerson";

export default {
    title: 'Modules/AboutPerson',
    component: AboutPerson,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
    }
  } as Meta;

const Template: Story<Props> = args => <AboutPerson {...args} />


export const Default = Template.bind({})
Default.args = {
    title: "lorem",
    subtitle: "ipsum",
    img: "/heiddis.png",
    email: "oli_ingi@msn.com",
    phone: "6982769",
    bookLink: {
        caption: "lorem ipsum",
        to: "https://mbl.is"
    }
} as Props

export const Design = Template.bind({})
Design.args = {
    title: "Heiðdís Snorradóttir",
    subtitle: "Næringarfræðingur MSc. með áherslu á lýðheilsu",
    img: "/heiddis.png",
    email: "heiddis@endurnaering.is",
    phone: "5771771",
    bookLink: {
        caption: "Bóka viðtal",
        to: "https://app.karaconnect.com/company/1115/registration?auth=2"
    }
} as Props