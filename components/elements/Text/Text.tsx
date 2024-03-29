import styled, { css } from "styled-components"
import { FadeHandler, MarginHandler } from "../../../styles/common"


export type Props = {
    size?: "xs" | "sm" | "med" | "lg" | "xl" | "xxl";
    lg?: boolean;
    sm?: boolean;
    color?: Colors;
    italic?: boolean;
    caps?: boolean;
    as?: Typography;
    faded?: boolean;
    id?: string;
    center?: boolean;
    block?: boolean;
    nowrap?: boolean;
} & Margins & (
    | { bold?: boolean; thick?: never; }
    | { bold?: never; thick?: boolean }
) & (
    | { fade: Fade; delay?: number; }
    | { fade?: never; delay?: never }
)


const Text = styled.p<Props>`
    display: ${p => p.block && "block"};
    color: ${p => p.color ? p.theme.colors[p.color] : "inherit"};
    font-family: ${p => p.theme.fontFamily};
    text-align: ${p => p.center ? "center" : "start"};
    white-space: ${p => p.nowrap && "nowrap"}; 
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
                        : 2.6}rem;
    line-height: 1.5em;
    font-weight: ${p => p.thick ? 600 : p.bold ? 'bold' : 300};
    ${p => p.italic && css`font-style: italic;`}
    ${p => p.caps && css`text-transform: uppercase;`}
    ${p => p.center && css`text-align: center;`}
    opacity: ${p => p.faded && 0.6};
    
    ${MarginHandler}
    ${FadeHandler}
    ${p => p.delay && css`
        opacity: 0;
        animation-delay: ${p.delay}s;
    `}
`

export default Text