import { FC } from "react";
import Card from '../../elements/Card/Card'
import Grid from "../../elements/Grid/Grid";
import Section from "../../modules/Section/Section";
import CardLink from "../../modules/CardLink/CardLink";
import { Props as IconProps } from "../../elements/Icon/Icon";

export type Props = {
    links: {
        title: string;
        href: string;
        icon: IconProps["type"];
        description: string;
        hoverColor?: Colors;
    }[]
    title: string | JSX.Element;
    variant?: Colors;
    shadowBottom?: boolean;
    border?: "top" | "bottom" | "both";
}

const CardLinkSection: FC<Props> = ({ links, title, variant, ...styles }) =>
    <Section titleAlign="center" title={title} variant={variant} {...styles}>
        <Grid min="280px" max="300px" gap="25px">
            {links.map(l => <CardLink 
                key={l.title}
                icon={l.icon}
                title={l.title}
                description={l.description}
                hoverColor={l.hoverColor}
                href={l.href}
            />)}
        </Grid>
    </Section>

export default CardLinkSection


{/* <Section title="Þjónustuleiðir" variant="secondary">
        <Grid min="280px" max="300px" gap="25px">
            <CardLink 
                icon="person"
                title="Einstaklingsviðtöl"
                description="Sérsniðin næringarráðgjöf"
                hoverColor="tertiary"
                href="/vidtol"
            />
            <CardLink 
                icon="reward"
                title="Námskeið"
                description="Endurnærandi lausnir"
                hoverColor="red"
                href="/vidtol"
            />
            <CardLink 
                icon="mic"
                title="Fyrirlestrar"
                description="Fræðsla og innblástur"
                hoverColor="blue"
                href="/vidtol"
            />
        </Grid>
    </Section> */}