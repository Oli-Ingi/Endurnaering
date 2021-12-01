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
        border="bottom"
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
                content: "Með markmið þín að leiðarljósi finnum við lausnir sem eru sérsniðnar að þér.", 
                color: "red"
            },
            { 
                title: "Faglegur", 
                subtitle: "stuðningur", 
                icon: "chat", 
                content: "Leiðbeinum þér í átt að þínum markmiðum og erum ávallt innan handar þér til halds og trausts.", 
            },
            { 
                title: "Langvarandi", 
                subtitle: "árangur", 
                icon: "chart", 
                content: "Brjótum leiðina að markmiðum þínum upp í lítil skref til að byggja upp traustan grunn sem endist.", 
                color: "blue"
            }
        ]}
    />

    

export default WhyUs