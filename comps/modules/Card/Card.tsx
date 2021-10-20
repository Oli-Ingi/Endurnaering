import { FC } from 'react'
import styled, { css } from 'styled-components'
import Text from '../../elements/Text/Text'
import { v4 as uuid } from 'uuid'

export type Props = {
    variant?: Variants;
    title: string;
    content: string[];
    border?: boolean;
    shadow?: "always" | "hover";
    href?: string;
}

const CardStyle = css<Pick<Props, "variant" | "border" | "shadow">>`
    display: block;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: ${p => p.variant ? p.theme.colors[p.variant] : undefined};
    box-shadow: ${p => p.shadow === "always" ? p.theme.shadow : undefined}; 
    ${p => p.border && css`border-top: 4px solid ${p.theme.colors[p.variant === "primary" ? "white" : "primary"]};`}
    position: relative;
    text-decoration: none;

    :hover {
        ::before {
            opacity: 1;
        }
    }

    ${p => p.shadow === "hover" && css`
        cursor: pointer;

        ::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
            box-shadow: ${p => p.theme.deepShadow};
            transition-duration: 0.5s;
        }
    `}
`
// Typescript doesn't like "as".
const StCard = styled.div<Pick<Props, "border" | "shadow" | "variant">>`${CardStyle}`
const StLink = styled.a<Pick<Props, "variant" | "border" | "shadow" | "href">>`${CardStyle}`


const Card: FC<Props> = ({ title, content, variant, href, ...style }) => 
    href
    ?   <StLink variant={variant} href={href} {...style}>
            <Text as="h3" variant={variant === "primary" ? "white" : "primary"} thick marginBottom="1em">{title}</Text>
            {content.map(p => <Text key={uuid()} {...variant === "primary" && { variant: "white" }} size="sm">
                {p}
            </Text>)}
        </StLink>
    :   <StCard variant={variant} {...style}>
            <Text as="h3" variant={variant === "primary" ? "white" : "primary"} thick marginBottom="1em">{title}</Text>
            {content.map(p => <Text key={uuid()} {...variant === "primary" && { variant: "white" }} size="sm">
                {p}
            </Text>)}
        </StCard>
    


export default Card