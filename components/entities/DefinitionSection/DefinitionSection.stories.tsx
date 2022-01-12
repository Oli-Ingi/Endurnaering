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
        bigCards: { type: "boolean" }
    }
  } as Meta;

const Template: Story<Props> = props => <DefinitionSection {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Lorem ipsum",
    cols: "3",
    definitions: [
        { title: "Lorem ipsum1", icon: "like", content: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum2", icon: "person", content: "Lorem ipsum dolor sit amet" },
        { title: "Lorem ipsum3", icon: "sun", content: "Lorem ipsum dolor sit amet" },
    ]
} as Props

export const Colorful = Template.bind({})
Colorful.args = {
    ...Default.args,
    cols: "4",
    definitions: [
        { title: "Lorem ipsum1", icon: "like", content: "Lorem ipsum dolor sit amet", color: "tertiary"  },
        { title: "Lorem ipsum2", icon: "person", content: "Lorem ipsum dolor sit amet", color: "red" },
        { title: "Lorem ipsum3", icon: "sun", content: "Lorem ipsum dolor sit amet" ,color: "blue"  },
        { title: "Lorem ipsum4", icon: "mic", content: "Lorem ipsum dolor sit amet", color: "primary" },
    ]
}

export const Design = Template.bind({})
Design.args = {
    title: "Einkenni þjónustunnar",
    definitions: [
        { 
            title: "Viðurkenndir sérfræðingar", 
            icon: "reward", 
            content: "Veitum löggilta heilbrigðisþjónustu með starfsleyfi frá Embætti landlæknis.", 
            color: "tertiary"
        },
        { 
            title: "Persónumiðuð þjónusta", 
            icon: "target", 
            content: "Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
            color: "red"
        },
        { 
            title: "Faglegur stuðningur", 
            icon: "chat", 
            content: "Leiðbeinum þér á þinni vegferð og erum ávallt innan handar þér til halds og trausts.", 
        },
        { 
            title: "Langvarandi árangur", 
            icon: "chart", 
            content: "Brjótum vegðferð þína upp í lítil og raunhæf skref til að byggja upp traustan grunn sem endist.", 
            color: "blue"
        },
    ]
}

export const DesignBigCards = Template.bind({})
DesignBigCards.args = {
    ...Design.args,
    bigCards: true
} as Props