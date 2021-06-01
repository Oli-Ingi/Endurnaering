import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Link, { Props } from "./Link";

const template: Story<Props> = props => <Link {...props} />

const linkStory = template.bind({});

linkStory.args = {
    children: 'Here\'s a link',
    to: '/'
} as Props

const LinkStories = {
    component: Link,
    title: "Link"
}

export { linkStory }
export default LinkStories