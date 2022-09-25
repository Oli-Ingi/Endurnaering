import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import CollabCard, { Props } from "./CollabCard"


export default {
    title: "modules/CollabCard",
    component: CollabCard,
    parameters: {
        layout: "centered"
    },
    argTypes: {
        img: {
            control: {
                type: "radio",
                options: ["heilsuklasinn.png", "heilsugaeslan_hofda.png", "Virk.png"]
            }          
        }
    }
    
} as Meta;


const template: Story<Props> = args => <CollabCard {...args} />

export const Default = template.bind({})
Default.args = {
    img: "/heilsuklasinn.png",
    alt: "heilsuklasinn-logo-link"
} as Props