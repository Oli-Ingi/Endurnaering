import { Story } from "@storybook/react/types-6-0";
import React from "react";
import MainLink, { Props } from "./MainLink";





const Template: Story<Props> = props => <MainLink {...props} />

export const Test1 = Template.bind({});

Test1.args = {
    large: true,
    children: "Test1 buttonian"
}

export const Test2 = Template.bind({});

Test2.args= {
    children: "Children test button"
}



const ButtonStory = {
    component: MainLink,
    title: "MyButton",
    //decorators: [story => withTheme(story)]
}

export default ButtonStory;