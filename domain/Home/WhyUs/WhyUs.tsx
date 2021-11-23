import DefinitionSection from "../../../components/entities/DefinitionSection/DefinitionSection";



const WhyUs = () => 
    <DefinitionSection 
        title="Af hverju Endurnæring?"
        variant="secondary"
        definitions={[
            { 
                title: "Persónumiðuð þjónusta", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                icon: "target"
            },
            { 
                title: "Faglegur stuðningur", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.",
                icon: "chat"
            },
            { 
                title: "Langvarandi árangur", 
                content: "Mætum þer þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                icon: "chart"
            },
        ]}
    />

    

export default WhyUs