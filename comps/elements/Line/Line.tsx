import styled, { css } from 'styled-components'
import { MarginHandler, VariantHandler } from '../../../styles/common'
import { widthIn } from '../../../styles/keyframes'


export type Props = {
    variant?: Variants;
} & (
    | { animate: true; delay?: number; }
    | { animate?: never; delay?: never; }
) & Margins


const Line = styled.hr<Props>`
    width: ${p => p.animate ? 0 : 100}%;

    ${p => p.animate && css`
        animation: ${widthIn} 0.6s forwards ease-out;
        animation-delay: ${p.delay || 0}s;
    `}

    border: none;
    border-top: 1px solid ${VariantHandler};

    ${MarginHandler}
`



export default Line