import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Concept, { Props } from "./Concept";

export default {
    title: 'Entities/Concept',
    component: Concept,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      variant: { 
        control: { 
            type: 'radio',
            options: ["primary", "secondary", "white"]
          }
      },
      imgPos: {
        control: { 
            type: 'radio',
            options: ["bottomLeft", "bottomRight", "topLeft", "topRight"]
          }
      },
      imgOffset: { type: "boolean" },
      shadow: { type: "boolean" }
    },
  } as Meta;

const Template: Story<Props> = props => <Concept {...props} />

export const Default = Template.bind({})
Default.args = {
    article: {
        title: "Þetta er titill",
        content: ["Hérna er eitthvað content um eitthvað merkilegt concept. En nú er spurning hvernig þetta hegðar sér þetta þetta er einhver langur texti og það er negative margin á myndinni."],
        button: {
            caption: "Lesa meira",
            to: "https://worldofwarcraft.com",
            newTab: true
        }
    },
    img: "/Innsaei.png",
    imgPos: "bottomLeft",
} as Props

export const Secondary = Template.bind({})
Secondary.args = {
    ...Default.args,
    variant: "secondary"
} as Props

export const BottomRight = Template.bind({})
BottomRight.args = {
    ...Secondary.args,
    imgPos: "bottomRight"
} as Props

export const Offset = Template.bind({})
Offset.args = {
    ...Secondary.args,
    imgOffset: 50
} as Props

export const Shadow = Template.bind({})
Shadow.args = {
    ...Default.args,
    shadow: true
} as Props