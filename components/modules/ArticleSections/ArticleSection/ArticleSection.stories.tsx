import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Text from "../../../elements/Text/Text";
import ArticleSection, { Props } from "./ArticleSection";

export default {
    title: 'Modules/ArticleSection',
    component: ArticleSection,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
    },
  } as Meta;

const Template: Story<Props> = props => <ArticleSection {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Þetta er á undirgrein",
} as Props

export const WithText = Template.bind({})
WithText.args = {
    title: "Þetta er á undirgrein",
    children: <Text>Hér er einhver texti sem titillinn er lýsandi fyrir.</Text>
} as Props