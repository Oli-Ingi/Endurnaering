import styled from "styled-components"
import { addPxIfNumber } from "../../../styles/common"

export type Props = {
    min: string | number;
    max?: string | number;
    gap?: number | string;
}


const Grid = styled.div.attrs<Props>(p => ({
    min: p.min || 250,
    gap: p.gap || 25
}))<Props>`
    display: grid;
    grid-template-columns: repeat(auto-fit, ${p => p.max 
        ? `minmax(${addPxIfNumber(p.min)}, ${addPxIfNumber(p.max)})` 
        : addPxIfNumber(p.min)});
    grid-gap: ${p => addPxIfNumber(p.gap || 30)};
    width: 100%;
    justify-content: center;
`


export default Grid