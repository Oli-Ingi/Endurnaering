import { Props } from '../components/entities/Header/Header'

export default {
    navItems: [
        { caption: "Áherslur", to: "https://visir.is" },
        { caption: "Um okkur", links: [
            { caption: "Endurnæring", to: "/um-okkur" },
            { caption: "Starfsfólk", to: "/um-okkur#starfsfolk" },
            { caption: "Skilmálar", to: "/um-okkur#skilmalar" },
        ] }
    ],
    interview: {
        attend: {
            caption: "Mæta í viðtal",
            to: "https://app.karaconnect.com/login?cid=1115"
        },
        book: {
            caption: "Bóka viðtal",
            to: "https://app.karaconnect.com/company/1115/registration?auth=2"
        },
        title: "Viðtöl"
    }
} as Props 



