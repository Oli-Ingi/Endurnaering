import Footer from '../../components/entities/Footer/Footer'

// SSR ?
const nav = [
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
        title: "Lykiláherslur",
        links: [
            { caption: "Áhugahvetjandi samtal", to: "https://visir.is" },
            { caption: "Heilbrigt samband við mat", to: "https://visir.is" },
            { caption: "Jákvæð heilsa", to: "https://visir.is" }
        ]
    },
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
    { caption: "105 Reykjavík" },
    { caption: "577-1771" },
    { caption: "endurnaering@endurnaering.is" },
]

const subLinks = [
    { caption: "Skilmálar", to: "/skilmalar" },
    { caption: "Persónuvernd", to: "/skilmalar#personuvernd" },
]

const affiliates = [
    { img: "/Embaetti_landlaeknis.png", to: "https://www.landlaeknir.is/", alt: "Embætti landlæknis" },
    { img: "/mni.png", to: "http://www.mni.is", alt: "MNI" }
]

const socialMedia = [
    {
        src: "/Facebook.svg",
        to: "https://www.facebook.com/endurnaering",
        alt: "facebook"
    },
    {
        src: "/instagram.svg",
        to: "https://www.instagram.com/endurnaering/",
        alt: "instagram"
    },
    {
        src: "/LinkedIn.svg",
        to: "https://www.instagram.com/endurnaering/",
        alt: "linked-in"
    },
    {
        src: "/Twitter.svg",
        to: "https://www.instagram.com/endurnaering/",
        alt: "twitter"
    },
    {
        src: "/Youtube.svg",
        to: "https://www.instagram.com/endurnaering/",
        alt: "youtube"
    },
    {
        src: "/Pinterest.svg",
        to: "https://www.instagram.com/endurnaering/",
        alt: "pinterest"
    }
]


const FooterIs = () =>
    <Footer  
        smallOrgInfo
        contact={contact}
        nav={nav}
        orgInfo={orgInfo}
        affiliates={affiliates}
        subLinks={subLinks}
        socialMedia={socialMedia}
    />


export default FooterIs