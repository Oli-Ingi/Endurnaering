import DefinitionSection from "../../../components/entities/DefinitionSection/DefinitionSection";



const WhyUs = () => 
    <DefinitionSection 
        title="Við leggjum áherslu á gæðaþjónustu"
        bigCards
        definitions={[
            { 
                title: "Viðurkenndir sérfræðingar", 
                icon: "reward", 
                content: "Veitum löggilta heilbrigðisþjónustu með starfsleyfi frá Embætti landlæknis.", 
                color: "tertiary"
            },
            { 
                title: "Persónumiðuð þjónusta", 
                icon: "target", 
                content: "Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                color: "red"
            },
            { 
                title: "Faglegur stuðningur", 
                icon: "chat", 
                content: "Leiðbeinum þér á þinni vegferð og erum ávallt innan handar þér til halds og trausts.", 
            },
            { 
                title: "Langvarandi árangur", 
                icon: "chart", 
                content: "Brjótum vegferð þína upp í lítil og raunhæf skref til að byggja upp traustan grunn sem endist.", 
                color: "blue"
            }
        ]}
    />

    

export default WhyUs