import { Story } from "@storybook/react/types-6-0"
import React from "react"
import ArticleText, { Props } from './ArticleText'

const Template: Story<Props> = props => <ArticleText {...props} />

export const basicStory = Template.bind({});

basicStory.args = {
    children: "Here is an article paragraph"
}


const ArticleTextStory = {
    component: ArticleText,
    title: "ArticleText",
}


export default ArticleTextStory;