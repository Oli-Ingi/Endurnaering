import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Accordion, { Props } from "./Accordion";

export default {
    title: 'Entities/Accordion',
    component: Accordion,
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
    }
  } as Meta;

const Template: Story<Props> = props => <Accordion {...props} />

export const Default = Template.bind({})
Default.args = {
    items: [
        { title: "title 1", content: ["Here is paragraph 1", "Here is paragraph 2"]},
        { title: "title 2", content: ["Here is paragraph 1", "Here is paragraph 2", "Here is paragraph 3"]},
        { title: "title 3", content: ["Here is paragraph 1"]},
    ]
} as Props

export const Realistic = Template.bind({})
Realistic.args = {
    items: [
        { title: "Fyrir hverja hentar þjónusta Endurnæringar?", content: ["Fatlafól", "Í spítthjólastól"]},
        { title: "Hvernig bóka ég tíma hjá næringarfræðingi?", content: ["Það fer eftir því hver næringarfræðingurinn er, en ef það er Heiðdís, þá seturðu X á rúðuna þína áður en þú ferð að sofa á miðvikudagskvöldi. Heiðdís hefur svo samband við þig daginn eftir."]},
        { title: "Hvað græði ég á því að tala við næringarfræðing?", content: ["Þú græðir ekkert á því þar sem það kostar pening að tala við næringarfræðing, en þú gætir fengið góða heilsu út úr því ef þú fylgir leiðbeiningum."]},
    ]
} as Props