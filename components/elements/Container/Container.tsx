import { FC } from "react"
import styled, { css } from "styled-components"


export type Props = {
    variant?: Colors;
    noPad?: boolean;
    as?: "section" | "article" | "main";
    shadowBottom?: boolean;
    border?: "top" | "bottom" | "both";
}


const StContainer = styled.div<Props>`
    width: 100%;
    box-sizing: border-box;
    background-color: ${p => p.theme.colors[p.variant || "white"]};
    box-shadow: ${p => p.shadowBottom && p.theme.shadowBottom};
    z-index: ${p => p.shadowBottom && 5};
    border-top: ${p => (p.border === "both" || p.border === "top") && `1px solid #dadada`};
    border-bottom: ${p => (p.border === "both" || p.border === "bottom") && `1px solid #dedede`};
    
    ${p => !p.noPad && css`
        @media screen and (min-width: 700px) {
            padding: 0 1em;
        }
    `}

    > div, > section, > main, > header, > footer {
        max-width: 100%;
        width: ${p => p.theme.layout.containerWidth};
        margin: 0 auto;
    }
`


const Container: FC<Props> = props => 
        <StContainer {...props} />


export default Container