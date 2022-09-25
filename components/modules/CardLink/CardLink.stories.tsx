import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { mainTheme } from "../../../styles/themes";
import Card, { Props } from "./CardLink";

export default {
    title: 'Modules/CardLink',
    component: Card,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        icon: {
            control: {
                type: "select",
                options: ["play", "target", "chat", "chart", "recycle", "like", "heart", "suitcase", "lightning", "sun", "mic", "person", "reward"]
            }
        },
        hoverColor: { 
            control: { 
                type: 'select',
                options:  Object.keys(mainTheme.colors)
              }
          },
    }
  } as Meta;

const Template: Story<Props> = props => <Card {...props} />


export const Default = Template.bind({})
Default.args = {
    title: "Hér er titill",
    description: "Hér er texti",
    icon: "chart",
    hoverColor: "red",
    href: "/"
} as Props

export const Secondary = Template.bind({})
Secondary.args = {
    ...Default.args,
    variant: "secondary"
} as Props

export const Bordered = Template.bind({})
Bordered.args = {
    ...Default.args,
    border: true
} as Props

export const HoverShadow = Template.bind({})
HoverShadow.args = {
    ...Bordered.args,
    shadow: "hover"
} as Props

export const AsLink = Template.bind({})
AsLink.args = {
    ...Bordered.args,
    shadow: "hover",
    href: "https://skra.is"
} as Props

export const Realistic = Template.bind({})
Realistic.args = {
    title: "Einstaklingsviðtöl",
    description: "Unnið er með einstaklinga í viðtölum. Bæði er hægt að velja um staðviðtal og fjarviðtal í gegnum síma eða tölvu.",
    icon: "person"
} as Props

const GridTemplate: Story<Props> = props => 
    <div style={{ display: "grid", gridTemplateColumns: 400 }}>
        <Card {...props} />
    </div>

export const InGrid = GridTemplate.bind({})
InGrid.args = Realistic.args;

