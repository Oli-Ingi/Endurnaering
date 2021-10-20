import styled, { css } from "styled-components"
import { FadeHandler, MarginHandler, VariantHandler } from "../../../styles/common"


export type Props = {
    size?: "xs" | "sm" | "med" | "lg" | "xl" | "xxl";
    lg?: boolean;
    sm?: boolean;
    variant?: Variants;
    italic?: boolean;
    caps?: boolean;
    as?: Typography;
    center?: boolean;
} & Margins & (
    | { bold?: boolean; thick?: never; }
    | { bold?: never; thick?: boolean }
) & (
    | { fade: Fade; delay?: number; }
    | { fade?: never; delay?: never }
)


const Text = styled.p<Props>`
    ${p => p.variant && css`color: ${VariantHandler};`} /* black default */
    font-family: ${p => p.theme.fontFamily};
    font-size: ${p => !p.size || p.size === "med" 
        ? 1.2
        : p.size === "xs"
            ? 0.8
            : p.size === "sm"
                ? 1
                : p.size === "lg"
                    ? 1.6
                    : p.size === "xl" 
                        ? 2.2
                        : 2.6}em;
    font-weight: ${p => p.thick ? 600 : p.bold ? 'bold' : 300};
    ${p => p.italic && css`font-style: italic;`}
    ${p => p.caps && css`text-transform: uppercase;`}
    ${p => p.center && css`text-align: center;`}
    
    ${MarginHandler}
    ${FadeHandler}
    ${p => p.delay && css`
        opacity: 0;
        animation-delay: ${p.delay}s;
    `}
`

export default Text