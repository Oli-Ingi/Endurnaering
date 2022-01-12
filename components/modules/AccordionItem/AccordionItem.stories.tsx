import { Story, Meta } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import AccordionItem, { Props } from "./AccordionItem";

export default {
    title: 'Modules/AccordionItem',
    component: AccordionItem,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "white"]
            }
        },
        isOpen: { type: "boolean" }
    }
  } as Meta;

const Template: Story<Props> = ({ onClick: __, isOpen: _, ...rest }) => {
    const [mockIsOpen, mockSetIsOpen] = useState(false);

    return <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <AccordionItem 
            isOpen={mockIsOpen}
            onClick={() => mockSetIsOpen(!mockIsOpen)}
            {...rest} 
        />
    </ul>
}


export const Default = Template.bind({})
Default.args = {
    item: { title: "accordion title 1", content: ["paragraph 1", "paragraph 2", "paragraph 3", "test 4"]},
    isOpen: false,
    onClick: () => {}
} as Props