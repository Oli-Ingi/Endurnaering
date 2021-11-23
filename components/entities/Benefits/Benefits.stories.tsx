import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Benefits from "./Benefits";

export default {
    title: 'Entities/Benefits',
    component: Benefits,
    parameters: {
        layout: 'fullscreen'
    },
  } as Meta;

const Template: Story<{}> = props => <Benefits {...props} />

export const Default = Template.bind({})
