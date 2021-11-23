import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Flex, { Props } from "./Flex";

export default {
    title: 'Elements/Flex',
    component: Flex,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
      as: { 
          control: { 
              type: 'select',
              options: ["main", "section", "article", "header", "footer"]
            }
        },
      align: { 
          control: { 
              type: 'select',
              options: ["center", "stretch", "flex-start", "flex-end"]
            }
        },
      just: { 
          control: { 
              type: 'select',
              options: ["center", "stretch", "flex-start", "flex-end", "between", "around"]
            }
        },
        pad: { type: "string" }
    },
  } as Meta;


const template: Story<Props> = args => <Flex {...args} />

export const Default = template.bind({})
Default.args = {
    children: <div>Some div</div>
} as Props


export const Between = template.bind({})
Between.args = {
    ...Default.args,
    children: <div>
        <div>div left</div>
        <div>div middle</div>
        <div>div right</div>
    </div>,
    just: "between"
} as Props


