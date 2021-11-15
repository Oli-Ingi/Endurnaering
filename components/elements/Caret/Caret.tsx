import { FC } from 'react'
import styled from 'styled-components'
import { VariantHandler } from '../../../styles/common'


export type Props = {
    isOpen: boolean;
    variant?: Variants;
}


const StCaret = styled.svg<Props>`
    cursor: pointer;
    width: 17px;
    height: 11px;
    transition-duration: 0.5s;
    margin-left: 10px;

    line {
        transition-duration: 0.3s;
        stroke-width: 2px;
        stroke: ${p => p.variant ? VariantHandler : "black"};
    }

    line:first-child {
        transform-origin: 0 0;
        transform: ${p => p.isOpen ? "translateY(8px) rotate(-90deg)" : "none"};
    }

    line:last-child {
        transform-origin: 16px 0;
        transform: ${p => p.isOpen ? "rotate(90deg) translate(8px)" : "none"};
    }
`


const Caret: FC<Props> = props =>
    <StCaret {...props}>
        <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="8" y1="0" y2="8" />
        <line strokeLinecap="butt" strokeLinejoin="round" x1="16" x2="8" y1="0" y2="8" />
    </StCaret>


export default Caret