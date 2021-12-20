import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Icon, { Props } from "./Icon";
import { mainTheme } from "../../../styles/themes";
import { useTheme } from "styled-components";

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
              options: ["play", "target", "chat", "chart", "recycle", "like", "heart", "suitcase", "lightning", "sun", "mic", "person", "reward", "facebook", "instagram", "insta2", "linkedIn"]
            }
        },
        color: {
            control: {
                type: "select",
                options: Object.keys(mainTheme.colors)
            }
        }
    },
} as Meta;


const DefaultStory: Story<Props> = args => <Icon {...args} />

export const Default = DefaultStory.bind({})
Default.args = {
    type: "play"
} as Props

const AllStory: Story<Props> = args => {
    const theme = useTheme();

    return <div style={{ display: "flex", gap: 30, flexWrap: "wrap", color: theme.colors[args.color] }}>
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
        <Icon type="instagram" />
        <Icon type="linkedIn" />
    </div>
}
    

export const All = AllStory.bind({})


