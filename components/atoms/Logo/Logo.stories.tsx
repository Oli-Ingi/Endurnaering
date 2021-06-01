import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Logo, { Props } from './Logo';

const template: Story<Props> = props => <Logo {...props} />

const basicStory = template.bind({});

basicStory.args = {
    bgGreen: true
} as Props


const LogoStories = {
    component: Logo,
    title: "Logo",
    decorators: [(Logo: Story) => <div style={{ height: 90, width: '100%', margin: 'auto' }}><Logo /></div>]
}

export { basicStory }
export default LogoStories