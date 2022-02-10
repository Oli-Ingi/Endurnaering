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
        to: "https://accounts.karaconnect.com/auth/realms/kara/protocol/openid-connect/registrations?response_type=code&client_id=kara-acc-manage-fe&scope=openid&redirect_uri=https%3A%2F%2Fauth.karaconnect.com%2Fcreate-client%3Fview%3Dapply%26company_id%3D1115"
    },
    title: "Viðtöl"
}


const HeaderIs = () =>
    <Header navItems={navItems} interview={interview} shadow />


export default HeaderIs