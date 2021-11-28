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
    height: 10px;
    margin-left: 10px;

    line {
        transition: transform 0.3s cubic-bezier(0.9,.05,.2,1);
        stroke-width: 1px;
        stroke: ${p => p.variant ? VariantHandler : "black"};
    }

    line:first-child {
        transform-origin: 1px 1px;
        transform: ${p => p.isOpen ? "translateY(7px) rotate(-90deg)" : "none"};
    }

    line:last-child {
        transform-origin: 15px 1px;
        transform: ${p => p.isOpen ? "rotate(90deg) translate(7px)" : "none"};
    }
`


const Caret: FC<Props> = props =>
    <StCaret {...props}>
        <line strokeLinecap="round" strokeLinejoin="round" x1="1" x2="8" y1="1" y2="8" />
        <line strokeLinecap="round" strokeLinejoin="round" x1="15" x2="8" y1="1" y2="8" />
    </StCaret>


export default Caret