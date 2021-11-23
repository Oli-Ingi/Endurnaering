import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import DefinitionSection, { Props } from "./DefinitionSection";

export default {
    title: 'Entities/DefinitionSection',
    component: DefinitionSection,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        variant: { 
            control: { 
                type: 'radio',
                options: ["primary", "secondary"]
            }
        },
    }
  } as Meta;

const Template: Story<Props> = props => <DefinitionSection {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Lorem ipsum",
    definitions: [
        { title: "Lorem ipsum1", icon: "like", content: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum2", icon: "like", content: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum3", icon: "like", content: "Lorem ipsum dolor sit amet" },
    ]
} as Props

