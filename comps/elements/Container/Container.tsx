import { FC } from "react"
import styled, { css } from "styled-components"
import { VariantHandler } from "../../../styles/common"


export type Props = {
    variant?: Variants;
    noPad?: boolean;
    as?: "section" | "article";
}


const StContainer = styled.div<Props>`
    width: 100%;
    box-sizing: border-box;
    background-color: ${VariantHandler};
    
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