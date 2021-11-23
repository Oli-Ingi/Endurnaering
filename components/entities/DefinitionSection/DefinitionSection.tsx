import { FC } from "react"
import Grid from "../../elements/Grid/Grid"
import Definition from "../../modules/Definition/Definition"
import Section from "../../modules/Section/Section"
import { Props as IconProps } from "../../elements/Icon/Icon"
import Card from "../../elements/Card/Card"


export type Props = {
    title: string;
    variant?: "secondary" | "white";
    definitions: {
        title: string;
        icon: IconProps["type"]
        content: string;
        to?: string;
    }[]
}

const DefinitionSection: FC<Props> = ({ title, variant, definitions }) => 
    <Section title={title} variant={variant}>
        <Grid min="230px" max="310px" gap={60}>
            {definitions[0].to ? definitions.map(d => <Card variant="white" border shadow="hover" href={d.to}><Definition iconRight key={d.title} title={d.title} icon={d.icon}>{d.content}</Definition></Card>)
                : definitions.map(d => <Definition key={d.title} title={d.title} icon={d.icon}>{d.content}</Definition>)}
        </Grid>
    </Section>


export default DefinitionSection

{/* <Definition title="Persónumiðuð þjónusta" icon="target">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition>
            <Definition title="Faglegur stuðningur" icon="chat">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition>
            <Definition title="Langvarandi árangur" icon="chart">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition> */}