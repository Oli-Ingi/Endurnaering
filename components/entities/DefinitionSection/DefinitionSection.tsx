import { FC } from "react"
import Grid from "../../elements/Grid/Grid"
import Definition from "../../modules/Definition/Definition"
import Section from "../../modules/Section/Section"
import { Props as IconProps } from "../../elements/Icon/Icon"


export type Props = {
    title: string | JSX.Element;
    variant?: "secondary" | "white";
    bigCards?: boolean;
    definitions: {
        title: string;
        subtitle?: string;
        icon: IconProps["type"]
        content: string;
        color?: Colors; // takes precedence for color.
    }[];
    color?: Colors; // if same color is applied to all.
    justIconColor?: boolean;
    borders?: boolean;
    cols?: "2" | "3" | "4";
    gap?: "sm" | "normal";
}

const sizeMap = {
    "2": "500px",
    "3": "300px",
    "4": "265px"
}

const DefinitionSection: FC<Props> = ({ title, variant, definitions, gap, justIconColor, color, cols, borders }) => 
    <Section title={title} variant={variant}>
        <Grid min="220px" max={sizeMap[cols || "3"]} gap={gap === "sm" ? "30px" : "60px"}>
            {definitions.map(d => 
                <Definition 
                    key={d.title} 
                    title={d.title} 
                    subtitle={d.subtitle}
                    icon={d.icon} 
                    color={d.color || color}
                    justIconColor={justIconColor}
                    border={borders}
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