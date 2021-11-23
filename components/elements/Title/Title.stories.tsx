import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Title, { Props } from "./Title";

export default {
    title: 'Elements/Title',
    component: Title,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      variant: { 
        control: { 
            type: 'radio',
            options: ["huge", "page", "article", "section", "subsection"]
          }
      },
    },
  } as Meta;

const Template: Story<Props> = props => <Title {...props} />

export const Default = Template.bind({})
Default.args = {
    children: "This is a section (default) title"
} as Props

export const Huge = Template.bind({})
Huge.args = {
    children: "This is a huge title",
    variant: "huge"
} as Props

export const Page = Template.bind({})
Page.args = {
    children: "This is a page title",
    variant: "page"
} as Props

export const Article = Template.bind({})
Article.args = {
    children: "This is an article title",
    variant: "article"
} as Props

export const Section = Template.bind({})
Section.args = {
    children: "This is a section title",
    variant: "section"
} as Props

export const SubSection = Template.bind({})
SubSection.args = {
    children: "This is a sub-section title",
    variant: "subsection"
} as Props