import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Text from "../../../elements/Text/Text";
import ArticleSection from "../ArticleSection/ArticleSection";
import SubArticleSection, { Props } from "./SubArticleSection";

export default {
    title: 'Modules/SubArticleSection',
    component: SubArticleSection,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
    },
  } as Meta;

const Template: Story<Props> = props => <ArticleSection title="Hér er venjulegt section">
    <Text>Hér er texti</Text>
    <SubArticleSection {...props} />
</ArticleSection> 

export const Default = Template.bind({})
Default.args = {
    title: "Þetta er á undirgrein innan section",
} as Props

export const WithText = Template.bind({})
WithText.args = {
    title: "Þetta er á undirgrein innan section",
    children: <Text>Hér er einhver texti sem titillinn er lýsandi fyrir.</Text>
} as Props