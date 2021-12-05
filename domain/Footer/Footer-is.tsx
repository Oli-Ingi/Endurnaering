import { useEffect } from 'react'
import Footer from '../../components/entities/Footer/Footer'
import { useMedia } from '../../hooks/useMedia'

// SSR ?
const nav = [
    { 
        title: "Þjónustuleiðir", 
        links: [
            { caption: "Einstaklingsviðtöl", to: "/vidtol" },
            { caption: "Námskeið", to: "/vidtol" },
            { caption: "Fyrirlestrar", to: "/vidtol" },
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
            { caption: "Endurnæring", to: "https://visir.is" },
            { caption: "Starfsfólk", to: "https://visir.is" }
        ]
    },
]

const contact = {
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
}

const orgInfo = [
    { caption: "Endurnæring ehf."},
    { caption: "kt. 410221-0200" },
    { caption: "Ármúli 42, 3. hæð" },
    { caption: "108 Reykjavík" },
    { caption: "577-1771" },
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
        src: "/instagram.svg",
        to: "https://www.instagram.com/endurnaering/",
        alt: "instagram"
    },
    {
        src: "/linked-in.svg",
        to: "https://www.instagram.com/endurnaering/",
        alt: "linked-in"
    }
]


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