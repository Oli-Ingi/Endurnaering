import React, { ReactNode } from 'react'
import styled from 'styled-components'




const StBtn = styled.a<Props>`
    padding: 5px 30px 5px 30px;
    display: block;
    background-color: ${props => props.invert 
        ? props.theme.colors.white
        : props.theme.colors.green};
    color: ${props => props.invert
        ? props.theme.colors.green
        : props.theme.colors.white};
    width: 180px;
    justify-self: start;
    border-radius: 10px;
    font-size: 1.4em;
    margin: 5px 15px;
    border: 1px solid ${props => props.theme.colors.green};
    ${props => props.col && `grid-column: ${props.col};`}
`

export interface Props {
    children?: ReactNode
    invert?: boolean
    small?: boolean
    href: string
    col?: number
    style?: object
}

const MainLink: React.FC<Props> = ({ children, ...st }) => 
    <StBtn {...st}>
        {children}
    </StBtn>


MainLink.defaultProps = {
    invert: false,
    small: false
}

export default MainLink