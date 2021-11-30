import Container from "../../../components/elements/Container/Container";
import Title from "../../../components/elements/Title/Title";
import DefinitionSection from "../../../components/entities/DefinitionSection/DefinitionSection";
import Section from "../../../components/modules/Section/Section";



const WhyUss = () => 
    <Container as="section">
        
    </Container>

const WhyUs = () => 
    <DefinitionSection 
        title={<Title light marginBottom="70px" variant="section">Af hverju <b>Endurnæring</b>?</Title>}
        cols="4"
        gap="sm"
        borders
        definitions={[
            { 
                title: "Viðurkenndir", 
                subtitle: "sérfræðingar",
                icon: "reward", 
                content: "Veitum löggilta heilbrigðisþjónustu með starfsleyfi frá Embætti landlæknis.", 
                color: "tertiary"
            },
            { 
                title: "Persónumiðuð", 
                subtitle: "þjónusta",
                icon: "target", 
                content: "Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru sérsniðnar að þér.", 
                color: "red"
            },
            { 
                title: "Faglegur", 
                subtitle: "stuðningur", 
                icon: "chat", 
                content: "Leiðbeinum þér á þinni vegferð og erum ávallt innan handar þér til halds og trausts.", 
            },
            { 
                title: "Langvarandi", 
                subtitle: "árangur", 
                icon: "chart", 
                content: "Brjótum vegferð þína upp í lítil og raunhæf skref til að byggja upp traustan grunn sem endist.", 
                color: "blue"
            }
        ]}
    />

    

export default WhyUs