import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Flag, { Props } from "./Flag";


const template: Story<Props> = props => <Flag {...props} />

const flagStory = template.bind({});

flagStory.args = {
    onClick: () => null
} as Props



const FlagStories = {
    component: Flag,
    title: "Flag"
}

export { flagStory }
export default FlagStories