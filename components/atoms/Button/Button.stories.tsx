import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Button, { Props } from "./Button";


const template: Story<Props> = props => <Button {...props} />

const grayStory = template.bind({});

grayStory.args = {
    gray: true,
    margin: '1em',
    children: "Here is a gray button",
    onClick: () => null
} as Props

const greenStory = template.bind({});

greenStory.args = {
    lg: true,
    children: 'Here is a large green button',
    onClick: () => null
} as Props


const ButtonStories = {
    component: Button,
    title: "Button"
}

export { grayStory, greenStory }
export default ButtonStories