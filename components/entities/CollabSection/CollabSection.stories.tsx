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
        { logo: "Virk.png", alt: "Virk-logo-link", to: "https://virk.is" },
        { logo: "heilsugaeslan_hofda.png", alt: "heilsugaesla-hofda-logo-link", to: "https://virk.is" },
        { logo: "heilsuklasinn.png", alt: "heilsuklasinn-logo-link", to: "https://heilsuklasinn.is" }
    ],
    title: "Samstarfsaðilar"
} as Props