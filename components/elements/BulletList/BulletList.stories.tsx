import { Story, Meta } from "@storybook/react/types-6-0";
import BulletList, { Props } from "./BulletList";
import { mainTheme } from '../../../styles/themes'
import Text from "../Text/Text";

export default {
    title: 'Elements/BulletList',
    component: BulletList,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'white',
            values: [
                { name: "white", value: "#FFF"},
                { name: "primary", value: mainTheme.colors.primary }
            ]
        }
    },
    argTypes: {
      variant: { 
          control: { 
              type: 'radio',
              options: ["primary", "secondary"]
            }
        },
    },
  } as Meta;


const template: Story<Props> = args => <BulletList {...args}>
    <Text as="li" size="sm">Line 1</Text>
    <Text as="li" size="sm">Line 2</Text>
    <Text as="li" size="sm">
        Line 3 with a nested list
        <BulletList>
            <Text as="li" size="sm">Nested line 1</Text>
            <Text as="li" size="sm">Nested line 2</Text>
        </BulletList>
    </Text>
</BulletList>


export const Default = template.bind({})


export const Secondary = template.bind({})
Secondary.args=  {
    variant: 'secondary'
} as Props

Secondary.parameters = {
    backgrounds: { default: "primary" }
}