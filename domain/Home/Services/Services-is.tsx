import DefinitionSection from "../../../components/entities/DefinitionSection/DefinitionSection";


const Services = () => 
    <DefinitionSection 
        title="Þjónustuleiðir"
        variant="secondary"
        definitions={[
            { 
                title: "Einstaklingsviðtal", 
                content: "Fáðu einkatíma hjá næringafræðingi þar sem við förum yfir þín mál. Bæði hægt að fá staðviðtal og fjarviðtal.", 
                to: "/vidtol" ,
                icon: "person"
            },
            { 
                title: "Námskeið", 
                content: "Komdu með öðrum á námskeið til að finna fyrir meðbyr og hafa það nice með öðrum",
                to: "/vidtol",
                icon: "reward"
            },
            { 
                title: "Fyrirlestrar", 
                content: "Bókaðu fyrirlestur, hallaðu þér aftur í sætinu og hlustaðu á Heiðdísi tala um næringu.", 
                to: "/vidtol",
                icon: "mic"
            },
        ]}
    />

    

export default Services