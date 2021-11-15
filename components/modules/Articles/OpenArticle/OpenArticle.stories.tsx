import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import OpenArticle, { Props } from "./OpenArticle";

export default {
    title: 'Modules/OpenArticle',
    component: OpenArticle,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
    },
  } as Meta;

const Template: Story<Props> = props => <OpenArticle {...props} />

export const Default = Template.bind({})
Default.args = {
    title: "Þetta er titill",
} as Props

