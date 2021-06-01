import { Story } from "@storybook/react/types-6-0"
import React from "react"
import HeaderActions, { Props } from './HeaderActions'

const Template: Story<Props> = props => <HeaderActions {...props} />

export const basicStory = Template.bind({});

basicStory.args = {
    btn1: {
        desc: 'Bóka viðtal',
        link: '/',
    },
    btn2: {
        desc: 'Mæta í viðtal',
        link: '/'
    },
    flag: {
        img: "",
        onClick: () => null
    }
} as Props


const HeaderActionsStories = {
    component: HeaderActions,
    title: "HeaderActions",
}


export default HeaderActionsStories;