import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'
import { VariantHandler } from '../../../styles/common'


export type Props = {
    variant?: Variants;
    lg?: boolean;
    isOpen: boolean;
    onClick?: MouseEventHandler;
}


const StToggler = styled.button<Pick<Props, "onClick">>`
    padding: 0;
    margin: 0;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    
    :hover svg {
        transform: scale(1.2);
    }
`

const StSvg = styled.svg<Omit<Props, "onClick">>`
    height: 20px;
    width: 20px;

    line {
        stroke: ${VariantHandler};
        transition: transform .3s cubic-bezier(0.9,.05,.2,1);
    }

    line:last-child {
        transform: ${p => p.isOpen && 'rotate(90deg)'};
        transform-origin: center center;
    }
`


const Toggler: FC<Props> = ({ onClick, ...style }) => 
    onClick 
        ? <StToggler onClick={onClick}><TogglerSvg {...style} /></StToggler>
        : <TogglerSvg {...style} />


const TogglerSvg: FC<Omit<Props, "onClick">> = props =>
    <StSvg xmlns="http://www.w3.org/2000/svg" {...props}>
        <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="20" y1="10" y2="10" strokeWidth="2" />
        <line strokeLinecap="butt" strokeLinejoin="round" x1="10" x2="10" y1="0" y2="20" strokeWidth="2" />
    </StSvg>


export default Toggler