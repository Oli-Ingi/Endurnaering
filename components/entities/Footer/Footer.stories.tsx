import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";
import Footer, { Props } from "./Footer";

export default {
    title: 'Entities/Footer',
    component: Footer,
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
      smallOrgInfo: { type: "boolean" }
    },
  } as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = props => <Footer {...props} />

export const Default = Template.bind({})
Default.args = {
    nav: [
        { 
            title: "Þjónustuleiðir", 
            links: [
                { caption: "Staðviðtöl", to: "https://visir.is" },
                { caption: "Fjarviðtöl", to: "https://visir.is" },
                { caption: "Námskeið", to: "https://visir.is" },
                { caption: "Fyrirlestrar", to: "https://visir.is" },
            ]
        },
        {
            title: "Fræðsla",
            links: [
                { caption: "Venjur", to: "https://visir.is" },
                { caption: "Innsæi", to: "https://visir.is" },
                { caption: "Næring", to: "https://visir.is" }
            ]
        },
        {
            title: "Um okkur",
            links: [
                { caption: "Endurnæring", to: "https://visir.is" },
                { caption: "Starfsfólk", to: "https://visir.is" }
            ]
        },
    ],
    contact: {
        title: "Hafðu samband",
        tel: {
            caption: "5 771 771",
            link: "tel:5771771"
        },
        hours: {
            desc: "Það er hægt að hringja í okkur alla virka daga á milli",
            period: "9:00 - 16:00"
        },
        email: "endurnaering@endurnaering.is",
        
    },
    orgInfo: [
        { caption: "Endurnæring ehf."},
        { caption: "kt. 410221-0200" },
        { caption: "Bíldshöfði 9, 110 Reykjavík. Höfðinn, Heilsuklasinn" },
        { caption: "105 Reykjavík" },
        { caption: "577-1771" },
        { caption: "endurnaering@endurnaering.is" },
    ],
    subLinks: [
        { caption: "Skilmálar", to: "https://worldofwarcraft.com" },
        { caption: "Persónuvernd", to: "https://worldofwarcraft.com" },
    ],
    affiliates: [
        { img: "/Embaetti_landlaeknis.png", to: "https://www.landlaeknir.is/", alt: "Embætti landlæknis" },
        { img: "/mni.png", to: "http://www.mni.is", alt: "MNI" }
    ],
    socialMedia: [
        {
            icon: "facebook",
            to: "https://www.facebook.com/endurnaering",
        },
        {
            icon: "instagram",
            to: "https://www.instagram.com/endurnaering/",
        },
        {
            icon: "linkedIn",
            to: "https://www.instagram.com/endurnaering/",
        }
    ]
} as Props