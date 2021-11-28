import { FC } from "react"
import Grid from "../../elements/Grid/Grid"
import Definition from "../../modules/Definition/Definition"
import Section from "../../modules/Section/Section"
import { Props as IconProps } from "../../elements/Icon/Icon"


export type Props = {
    title: string;
    variant?: "secondary" | "white";
    bigCards?: boolean;
    definitions: {
        title: string;
        icon: IconProps["type"]
        content: string;
        color?: Colors; // takes precedence for color.
    }[];
    color?: Colors; // if same color is applied to all.
    justIconColor?: boolean;
}

const DefinitionSection: FC<Props> = ({ title, variant, definitions, bigCards, justIconColor, color }) => 
    <Section title={title} variant={variant}>
        <Grid min="200px" max={bigCards ? "500px" : "300px"} gap={40}>
            {definitions.map(d => 
                <Definition 
                    key={d.title} 
                    title={d.title} 
                    icon={d.icon} 
                    color={d.color || color}
                    justIconColor={justIconColor}
                >
                    {d.content}
                </Definition>)}
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