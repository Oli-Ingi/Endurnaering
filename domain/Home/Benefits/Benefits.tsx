import Title from "../../../components/elements/Title/Title";
import DefinitionSection from "../../../components/entities/DefinitionSection/DefinitionSection";



const Benefits = () => 
    <DefinitionSection 
        title={<Title light variant="section" center>Aðferðir okkar geta skilað <b>margvíslegum árangri</b></Title>}
        borders
        definitions={[
            { 
                title: "Betri melting", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                icon: "recycle",
                color: "primary"
            },
            { 
                title: "Jákvæð líkamsímynd", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.",
                icon: "like",
                color: "blue"
            },
            { 
                title: "Orka og úthald", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                icon: "lightning",
                color: "primary"
            },
            { 
                title: "Líkamleg heilsa", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                icon: "heart",
                color: "red"
            },
            { 
                title: "Minni streita", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                icon: "suitcase",
                color: "primary"
            },
            { 
                title: "Vellíðan", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                icon: "sun",
                color: "tertiary"
            },
        ]}
    />

    

export default Benefits