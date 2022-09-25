import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Title from "../../elements/Title/Title";
import CollabSection, { Props } from "./CollabSection"


export default {
    title: "entities/CollabSection",
    component: CollabSection,
    parameters: {
        layout: "fullscreen"
    }
} as Meta;


const template: Story<Props> = args => <CollabSection {...args} />

export const Default = template.bind({})
Default.args = {
    links: [
        { logo: "/Virk.png", alt: "Virk-mynd", to: "https://virk.is" },
        { logo: "/Heilsugaeslan_Hofda.png", alt: "heilsugaesla-hofda-mynd", to: "https://virk.is" },
        { logo: "/Heilsuklasinn.png", alt: "heilsuklasinn-mynd", to: "https://heilsuklasinn.is" }
    ],
    title: "Samstarfsaðilar"
} as Props