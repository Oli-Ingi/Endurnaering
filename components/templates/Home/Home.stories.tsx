import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import Home, { Props } from "./Home";

export default {
    title: 'Templates/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
      variant: { 
        control: { 
            type: 'radio',
            options: ["primary", "secondary", "white"]
          }
      },
    }
  } as Meta;

const Template: Story<Props> = props => <Home {...props} />

export const Default = Template.bind({})
Default.args = {
    hero: {
        intro: {
            title: "Hér er titill",
            content: ["Hér er eitthvað catchy stuff um að þú þurfir að kaupa þessa þjónustu."]
        },
        img: "/Upphafsmynd3.svg",
    },
    services: {
        title: "Hér er listi af þjónustum í boði",
        items: [
            { title: "Þjónusta 1", content: ["Lýsing á þjónustu 1"], to: "https://worldofwarcraft.com" },
            { title: "Þjónusta 2", content: ["Lýsing á þjónustu 2"], to: "https://worldofwarcraft.com" },
            { title: "Þjónusta 3", content: ["Lýsing á þjónustu 3"], to: "https://worldofwarcraft.com" },
        ]
    },
    concepts: [
        { img: "/Venjur.png", 
            article: { 
                title: "Titill á áherslu 1", 
                content: ["Hér er lýsing á áherslu 1"],
                button: {
                    caption: "Lesa meira",
                    to: "https://worldofwarcraft.com",
                    newTab: true
                } 
            }
        },
        { img: "/Innsaei.png", 
            article: { 
                title: "Titill á áherslu 2", 
                content: ["Hér er lýsing á áherslu 2"],
                button: {
                    caption: "Lesa meira",
                    to: "https://worldofwarcraft.com",
                    newTab: true
                } 
            }
        },
        { img: "/Naering.png", 
            article: { 
                title: "Titill á áherslu 3", 
                content: ["Hér er lýsing á áherslu 3"],
                button: {
                    caption: "Lesa meira",
                    to: "https://worldofwarcraft.com",
                    newTab: true
                } 
            }
        }
    ],
    references: {
        title: "Listi af ummælum",
        items: [
            { title: "Titill á ummæli 1", content: ["Ummæli 1"] },
            { title: "Titill á ummæli 2", content: ["Ummæli 2"] },
            { title: "Titill á ummæli 3", content: ["Ummæli 3"] },
            
        ]
    },
    faq: {
        title: "Listi af spurningum",
        questions: [
            { title: "Spurning 1", content: ["Svar 1"] },
            { title: "Spurning 2", content: ["Svar 2"] },
            { title: "Spurning 3", content: ["Svar 3"] },
        ]
    }
} as Props

export const Secondary = Template.bind({})
Secondary.args = {
    ...Default.args,
    title: "Ummæli",
    variant: "secondary"
} as Props

export const Realistic = Template.bind({})
Realistic.args = {
    hero: {
        intro: {
            title: "Njótum þess að borða",
            content: [
                "Endurnæring veitir stuðning, ráðgjöf og fræðslu í átt að heilbrigðu sambandi við mat og jákvæða heilsu.",
            "Fáðu aðstoð hjá löggildum næringarfræðingi við að ná þínum markmiðum."
            ]
        },
        img: "/Upphafsmynd3.svg",
    },
    services: {
        title: "Þjónustuleiðir",
        items: [
            { title: "Staðviðtöl", content: ["Einstaklingsmiðuð næringarráðgjöf unnin út frá markmiðum og persónulegum áherslum."], to: "https://worldofwarcraft.com" },
            { title: "Fjarviðtöl", content: ["Einstaklingsmiðuð næringarráðgjöf unnin út frá markmiðum og persónulegum áherslum í gegnum fjarfundarbúnað Köru Connect."], to: "https://worldofwarcraft.com" },
            { title: "Fyrirlestar", content: ["Næringarfræðingur kemur í heimsókn í fyrirtæki eða samkomur."], to: "https://worldofwarcraft.com" },
        ]
    },
    concepts: [
        { img: "/Venjur.png", 
            article: { 
                title: "Áhugahvetjandi samtal", 
                content: ["Unnið er með einstaklinga í viðtölum. Bæði er hægt að biðja um staðviðtal eða fjarviðtal í gegnum síma eða tölvu."],
                button: {
                    caption: "Lesa meira",
                    to: "https://worldofwarcraft.com",
                    newTab: true
                } 
            }
        },
        { img: "/Innsaei.png", 
            article: { 
                title: "Heilbrigt samband við mat", 
                content: ["Unnið er með einstaklinga í viðtölum. Bæði er hægt að biðja um staðviðtal og fjarviðtal í gegnum síða eða tölvu."],
                button: {
                    caption: "Lesa meira",
                    to: "https://worldofwarcraft.com",
                    newTab: true
                } 
            }
        },
        { img: "/Naering.png", 
            article: { 
                title: "Jákvæð heilsa", 
                content: ["Það er mjög jákvætt að tala um jákvæða heilsu við jákvætt fólk sem er með jákvæða heilsu."],
                button: {
                    caption: "Lesa meira",
                    to: "https://worldofwarcraft.com",
                    newTab: true
                } 
            }
        }
    ],
    references: {
        title: "Ummæli",
        items: [
            { title: "Þetta er geggjað", content: ["Mér fannst þjónustan geggjuð, nú kann ég að borða."] },
            { title: "Frábært að borða perur", content: ["Ég hef aldrei kunnað að borða perur, en nú kann ég það."] },
            { title: "Snilldarráðgjöf", content: ["Þetta var gargandi snilld. Ég setti bara X á rúðuna mína og nú kann ég að borða."] },
            { title: "Mjög þægilegt viðmót", content: ["Það var mjög þægilegt að tala við næringarfræðing."] },
            
        ]
    },
    faq: {
        title: "Listi af spurningum",
        questions: [
            { title: "Fyrir hverja hentar þjónusta Endurnæringar?", content: ["Fatlafól", "Í spítthjólastól"]},
        { title: "Hvernig bóka ég tíma hjá næringarfræðingi?", content: ["Það fer eftir því hver næringarfræðingurinn er, en ef það er Heiðdís, þá seturðu X á rúðuna þína áður en þú ferð að sofa á miðvikudagskvöldi. Heiðdís hefur svo samband við þig daginn eftir."]},
        { title: "Hvað græði ég á því að tala við næringarfræðing?", content: ["Þú græðir ekkert á því þar sem það kostar pening að tala við næringarfræðing, en þú gætir fengið góða heilsu út úr því ef þú fylgir leiðbeiningum."]},
        ]
    }
} as Props