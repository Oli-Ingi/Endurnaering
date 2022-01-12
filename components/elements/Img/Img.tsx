import styled, { css } from 'styled-components'
import { MarginHandler } from '../../../styles/common'

export type Props = {
    img: string;
    borderTop?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    borderRight?: boolean;
    basis?: number;
    variant?: Variants;
    pad?: boolean;
} & Margins



const Img = styled.img.attrs((p: Props) => ({ src: p.img }))<Props>`
    box-sizing: border-box;
    align-self: flex-end;
    width: 100%;
    max-width: 350px;
    ${p => p.pad && css`padding: 1em;`}
    ${p => p.borderTop && css`border-top: 4px solid ${p.theme.colors[p.variant || "primary"]};`}
    ${p => p.borderRight && css`border-right: 4px solid ${p.theme.colors[p.variant || "primary"]};`}
    ${p => p.borderBottom && css`border-bottom: 4px solid ${p.theme.colors[p.variant || "primary"]};`}
    ${p => p.borderLeft && css`border-Left: 4px solid ${p.theme.colors[p.variant || "primary"]};`}
    ${MarginHandler}
`


export default Img