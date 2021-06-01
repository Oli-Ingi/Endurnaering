import { Story } from "@storybook/react/types-6-0"
import React from "react"
import ArticleHeader, { Props } from './ArticleHeader'

const Template: Story<Props> = props => <ArticleHeader {...props} />

export const basicStory = Template.bind({});

basicStory.args = {
    children: "Here is an article header"
}


const ArticleHeaderStory = {
    component: ArticleHeader,
    title: "ArticleHeader",
}

export default ArticleHeaderStory;