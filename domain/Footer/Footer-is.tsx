import { useEffect } from 'react'
import Footer from '../../components/entities/Footer/Footer'
import { useMedia } from '../../hooks/useMedia'

// SSR ?
const nav = [
    { 
        title: "Þjónustuleiðir", 
        links: [
            { caption: "Einstaklingsviðtöl", to: "/vidtol" },
            { caption: "Námskeið", to: "/namskeid/heilbrigt-samband-vid-mat" },
            { caption: "Fyrirlestrar", to: "/fyrirlestrar" },
        ]
    },
    // {
    //     title: "Lykiláherslur",
    //     links: [
    //         { caption: "Áhugahvetjandi samtal", to: "https://visir.is" },
    //         { caption: "Heilbrigt samband við mat", to: "https://visir.is" },
    //         { caption: "Jákvæð heilsa", to: "https://visir.is" }
    //     ]
    // },
    {
        title: "Um okkur",
        links: [
            { caption: "Endurnæring", to: "/um-okkur" },
            { caption: "Starfsfólk", to: "/um-okkur#starfsfolk" }
        ]
    },
]

const contact = {
    title: "Hafðu samband",
    tel: {
        caption: "Móttaka heilsuklasans: 599-1600",
        link: "tel:5991600"
    },
    hours: {
        desc: "Það er hægt að hringja í okkur alla virka daga á milli",
        period: "9:00 - 16:00"
    },
    email: "endurnaering@endurnaering.is",
}

const orgInfo = [
    { caption: "Endurnæring ehf."},
    { caption: "kt. 410221-0200" },
    { caption: "Bíldshöfði 9, 110 Reykjavík. Höfðinn, Heilsuklasinn" },
    { caption: "599-1600" },
    { caption: "endurnaering@endurnaering.is" },
]

const subLinks = [
    { caption: "Skilmálar", to: "/skilmalar" },
    { caption: "Persónuvernd", to: "/skilmalar#personuvernd" },
]

const affiliates = [
    { img: "/landlaeknir.svg", to: "https://www.landlaeknir.is/", alt: "Embætti landlæknis" },
    { img: "/mni.svg", to: "http://www.mni.is", alt: "MNI" }
]

const socialMedia = [
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
        to: "https://www.linkedin.com/company/endurnaering",
    }
] as { to: string; icon: "facebook" | "instagram" | "linkedIn" }[]


const FooterIs = () => {
    const mediaMatch = useMedia('(max-width: 1050px)');
    let slicedOrgInfo = mediaMatch ? orgInfo.slice(0, -2) : orgInfo;
        
    return <Footer  
        smallOrgInfo
        contact={contact}
        nav={nav}
        orgInfo={slicedOrgInfo}
        affiliates={affiliates}
        subLinks={subLinks}
        socialMedia={socialMedia}
    />
}
    


export default FooterIs