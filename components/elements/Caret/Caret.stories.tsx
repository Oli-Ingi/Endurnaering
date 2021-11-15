import { Story, Meta } from "@storybook/react/types-6-0";
import Caret, { Props } from "./Caret";

export default {
    title: 'Elements/Caret',
    component: Caret,
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

    },
  } as Meta;


const template: Story<Props> = args => <Caret {...args} />

export const Default = template.bind({})
Default.args = {
    isOpen: false
} as Props

export const Open = template.bind({})
Open.args=  {
    isOpen: true
} as Props