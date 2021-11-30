import Title from "../../../components/elements/Title/Title";
import CardLinkSection from "../../../components/entities/CardLinkSection/CardLinkSection";


const Services = () => 
    <CardLinkSection 
        title={<Title light variant="section"><b>Þjónustuleiðir</b> okkar</Title>}
        variant="secondary"
        links={[
            { 
                title: "Einstaklingsviðtöl", 
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