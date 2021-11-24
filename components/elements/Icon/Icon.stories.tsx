import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Icon, { Props } from "./Icon";

export default {
    title: 'Elements/Icon',
    component: Icon,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
      type: { 
          control: { 
              type: 'select',
              options: ["play", "target", "chat", "chart", "recycle", "like", "heart", "suitcase", "lightning", "sun"]
            }
        },
    },
  } as Meta;


const DefaultStory: Story<Props> = args => <Icon {...args} />

export const Default = DefaultStory.bind({})
Default.args = {
    type: "play"
} as Props

const AllStory: Story<Props> = () => 
    <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
        <Icon type="play" />
        <Icon type="target" />
        <Icon type="chat" />
        <Icon type="chart" />
        <Icon type="recycle" />
        <Icon type="like" />
        <Icon type="heart" />
        <Icon type="suitcase" />
        <Icon type="lightning" />
        <Icon type="sun" />
        <Icon type="person" />
        <Icon type="reward" />
        <Icon type="mic" />
        <Icon type="facebook" />
    </div>

export const All = AllStory.bind({})


