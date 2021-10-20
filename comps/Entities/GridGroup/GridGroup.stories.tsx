import { Story, Meta } from "@storybook/react/types-6-0";
import { isTargetLikeServerless } from "next/dist/next-server/server/config";
import React from "react";
import GridGroup, { Props } from "./GridGroup";

export default {
    title: 'Entities/GridGroup',
    component: GridGroup,
    parameters: {
        layout: 'padded'
    },
    argTypes: {
      variant: { 
        control: { 
            type: 'radio',
            options: ["primary", "secondary", "white"]
          }
      },
      shadow: {
          control: {
              type: 'radio',
              options: ["always", "hover"]
          }
      },
      border: { type: "boolean" },
    },
  } as Meta;

const Template: Story<Props> = props => <GridGroup {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Þetta er titill",
    items: [
        { title: "Hér er eitthvað", content: ["Hér er contentið fyrir eitthvað."]},
        { title: "Hér er meira", content: ["Hér er contentið fyrir meira."]},
        { title: "Hér er eitthvað miklu lengra en hitt dótið", content: ["Hér er contentið fyrir fyrir eitthvað miklu lengra en hitt dótið sem er notað til að sjá hvað gerist þegar textinn verður svona langur."]},
    ]
} as Props


export const WithBorders = Template.bind({})
WithBorders.args = {
    ...Default.args,
    border: true,
} as Props

export const WithShadow = Template.bind({})
WithShadow.args = {
    ...WithBorders.args,
    shadow: "always"
} as Props

export const AsLinks = Template.bind({})
AsLinks.args = {
    ...WithBorders.args,
    items: WithBorders.args.items.map(it => ({ ...it, to: "https://worldofwarcraft.com"  })),
    shadow: "hover"
} as Props

export const Secondary = Template.bind({})
Secondary.args = {
    ...WithShadow.args,
    variant: "secondary",
} as Props

export const FiveItems = Template.bind({})
FiveItems.args = {
    ...WithShadow.args,
    items: [...Default.args.items, {
        title: "Hér er fjórða atriðið",
        content: ["Hér væri eitthvað blablalbal."]
    }, {
        title: "Hér er það fimmta.",
        content: ["Hér væru upplýsingar um fimmta atriðið."]
    }]
} as Props