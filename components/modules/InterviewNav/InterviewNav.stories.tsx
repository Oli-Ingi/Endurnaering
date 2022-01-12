import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import InterviewNav, { Props } from "./InterviewNav";

export default {
    title: 'Modules/InterviewNav',
    component: InterviewNav,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        title: { type: "string" },
    }
  } as Meta;

const Template: Story<Props> = props => <InterviewNav {...props} />


export const Default = Template.bind({})
Default.args = {
    book: { caption: "Bóka viðtal", to: "https://app.karaconnect.com/company/1115/registration?auth=2" },    
    attend: { caption: "Mæta í viðtal", to: "https://app.karaconnect.com/login?cid=1115" }
} as Props