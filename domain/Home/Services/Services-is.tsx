import GridGroup from "../../../components/entities/GridGroup/GridGroup";
import Section from "../../../components/modules/Section/Section";

// SSR ?
const services = [
    { 
        title: "Fullorðnir", 
        content: ["Einstaklingsmiðuð næringarráðgjöf unnin út frá markmiðum og persónulegum áherslum."], 
        to: "https://worldofwarcraft.com" 
    },
    { 
        title: "Börn og unglingar", 
        content: ["Einstaklingsmiðuð næringarráðgjöf unnin út frá markmiðum og persónulegum áherslum í gegnum fjarfundarbúnað Köru Connect."], 
        to: "https://worldofwarcraft.com" 
    },
    { 
        title: "Fyrirtæki", 
        content: ["Næringarfræðingur kemur í heimsókn í fyrirtæki eða samkomur."], 
        to: "https://worldofwarcraft.com" 
    },
]

const ServicesIs = () =>
    <Section title="Þjónustuleiðir" variant="secondary">
        <GridGroup items={services} border shadow="hover" />
    </Section>


export default ServicesIs