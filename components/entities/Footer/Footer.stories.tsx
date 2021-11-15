import { Story, Meta } from "@storybook/react/types-6-0";
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
  } as Meta;

const Template: Story<Props> = props => <Footer {...props} />

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
        { caption: "Ármúli 42, 3. hæð" },
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
            src: "/facebook_icon.png",
            to: "https://www.facebook.com/endurnaering",
            alt: "facebook"
        },
        {
            src: "/instagram_icon.png",
            to: "https://www.instagram.com/endurnaering/",
            alt: "instagram"
        }
    ]
} as Props