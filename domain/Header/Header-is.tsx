import Header from '../../components/entities/Header/Header'

// SSR ?
const navItems = [
    { caption: "Þjónustuleiðir", links: [
        { caption: "Viðtöl", to: "/vidtol" },
        { caption: "Námskeið", to: "/namskeid" },
        { caption: "Fyrirlestrar", to: "/fyrirlestrar" },
    ] },
    { caption: "Um okkur", links: [
        { caption: "Endurnæring", to: "/um-okkur" },
        { caption: "Starfsfólk", to: "/um-okkur#starfsfolk" },
        { caption: "Skilmálar", to: "/skilmalar" },
    ]}
] as Array<
    { caption: string; to: string; links?: never; } | 
    { caption: string; to?: never; links: { to: string; caption: string; }[] }
> // WTF!

const interview = {
    attend: {
        caption: "Mæta í viðtal",
        to: "https://app.karaconnect.com/login?cid=1115"
    },
    book: {
        caption: "Bóka viðtal",
        to: "https://go.karaconnect.com/therapists/pro/25708/ask"
    },
    title: "Viðtöl"
}


const HeaderIs = () =>
    <Header navItems={navItems} interview={interview} shadow />


export default HeaderIs