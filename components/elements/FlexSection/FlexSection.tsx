import React, { ReactNode } from 'react'
import styled from 'styled-components'

/******************************/
/*                            */
/*   kept for grid reference  */
/*                            */
/******************************/

export enum GridColumns {
    single = '[full-start] minmax(1em, 1fr) [main-start] minmax(0, 80em) [main-end] minmax(1em, 1fr) [full-end]',
    double = 'minmax(1em, 1fr) minmax(200px, 40em) minmax(200px, 40em) minmax(1em, 1fr)',
    triple = '[full-start] minmax(1em, 1fr) [main-start] minmax(0, 80em) [main-end] minmax(1em, 1fr) [full-end]',
    quad = '[full-start] minmax(1em, 1fr) [main-start] minmax(0, 80em) [main-end] minmax(1em, 1fr) [full-end]',
    quint = '[full-start] minmax(1em, 1fr) [main-start] minmax(0, 80em) [main-end] minmax(1em, 1fr) [full-end]'
}

export interface Props {
    color: string;
    children?: ReactNode
}

const StSection = styled.section<Props>`
    grid-column: full;
    /* background-color: ${props => props.color}; */
    /* background: linear-gradient(174deg, white 0%, white 60%, ${props => props.color} 60%, ${props => props.color} 100%); */
    display: grid;
    background-color: ${props => props.color};
    grid-template-columns: ${props => props.theme.layout.columns};
`



const StWrapper = styled.div`
    grid-column: main;
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    height: 100vh;

    @media (max-width: 825px) {
    justify-content: center;
  }
`

const FlexSection: React.FC<Props> = ({ color, children }) => 
    <StSection color={color}>
        <StWrapper>{children}</StWrapper>
    </StSection>


export default FlexSection