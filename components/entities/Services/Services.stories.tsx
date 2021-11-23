import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Services from "./Services";

export default {
    title: 'Entities/Services',
    component: Services,
    parameters: {
        layout: 'fullscreen'
    },
  } as Meta;

const Template: Story<{}> = props => <Services {...props} />

export const Default = Template.bind({})
