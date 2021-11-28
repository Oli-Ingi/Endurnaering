import CardLinkSection from "../../../components/entities/CardLinkSection/CardLinkSection";


const Services = () => 
    <CardLinkSection 
        title="Þjónustuleiðir"
        variant="secondary"
        links={[
            { 
                title: "Einstaklingsviðtal", 
                description: "Sérsniðin næringarráðgjöf", 
                href: "/vidtol" ,
                icon: "person",
                hoverColor: "tertiary"
            },
            { 
                title: "Námskeið", 
                description: "Endurnærandi lausnir.",
                href: "/vidtol",
                icon: "reward",
                hoverColor: "red"
            },
            { 
                title: "Fyrirlestrar", 
                description: "Fræðsla og innblástur", 
                href: "/vidtol",
                icon: "mic",
                hoverColor: "blue"
            },
        ]}
    />

    

export default Services