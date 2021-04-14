import React, { ReactNode } from 'react'
import styled from 'styled-components'


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

const ClipSection = styled.section<Props>`
    grid-column: full;
    /* background-color: ${props => props.color}; */
    /* background: linear-gradient(174deg, white 0%, white 60%, ${props => props.color} 60%, ${props => props.color} 100%); */
    display: grid;
    background-color: ${props => props.theme.colors.testGreen};
    grid-template-columns: ${props => props.theme.layout.columns};
    position: relative;
    height: 100vh;
`

const StBg = styled.div`
    grid-column: full;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
     background-color: rgba(255, 255, 255, 0.9); 
    /* background-color: ${props => props.theme.colors.gray}; */
    background-size: cover;
    position: absolute;
    background-image: url('mynd-demo.jpg');
    background-blend-mode: overlay; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: 1.5s poly forwards ease-out;
    animation-delay: 2.5s;
`


const StWrapper = styled.div`
    grid-column: main;
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 825px) {
    justify-content: center;
  }
`

const ClipperSection: React.FC<Props> = ({ color, children }) => 
    <ClipSection color={color}>
        <StBg />
        <StWrapper>{children}</StWrapper>
    </ClipSection>


export default ClipperSection