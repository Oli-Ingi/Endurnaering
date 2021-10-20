import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Slider, { Props } from "./Slider";

export default {
    title: 'Entities/Slider',
    component: Slider,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        cardWidth: { type: "number" },
        fixedHeight: { type: "number" },
        slideDuration: { type: "number" },
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "white"]
            }
        },
        maxCardsInView: { 
            control: {
                type: "radio",
                options: [1, 2, 3, 4]
            }
        },
        autoSlide: { type: "boolean" },
        autoSlideInterval: { type: "number" }
    }
  } as Meta;

const Template: Story<Props> = props => <Slider {...props} />

export const Default = Template.bind({})
Default.args = {
    items: [
        { title: "test title 1", content: ["testContent1", "test2"]},
        { title: "test title 2", content: ["testContent2"]},
        { title: "test title 3", content: ["testContent3"]},
        { title: "test title 4", content: ["testContent4"]},
        { title: "test title 5", content: ["testContent5"]},
        { title: "test title 6", content: ["testContent6"]},
        { title: "test title 7", content: ["testContent7"]},
        { title: "test title 8", content: ["testContent8"]},
    ],
} as Props

export const AutoSlide = Template.bind({})
AutoSlide.args = {
    ...Default.args,
    autoSlide: true,
    autoSlideInterval: 8
} as Props

export const SmallCards = Template.bind({})
SmallCards.args = {
    ...Default.args,
    cardWidth: 150
} as Props

export const TallCards = Template.bind({})
TallCards.args = {
    ...Default.args,
    fixedHeight: 400
} as Props

export const OneCard = Template.bind({})
OneCard.args = {
    ...Default.args,
    maxCardsInView: 1
} as Props

export const Secondary = Template.bind({})
Secondary.args = {
    ...Default.args,
    variant: "secondary"
} as Props