import { Story, Meta } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import Burger, { Props } from "./Burger";

export default {
    title: 'Elements/Burger',
    component: Burger,
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
        isOpen: { type: "boolean" }
    },
  } as Meta;


const template: Story<Props> = ({ isOpen: _, onClick: __, ...args }) => {
    const [isOpen, setIsOpen] = useState(false);


    return <Burger 
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        {...args} 
    />
} 

export const Default = template.bind({})
Default.args = {
    isOpen: false
} as Props

