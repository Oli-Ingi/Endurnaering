import styled from "styled-components";
import React, { ReactNode } from 'react'

const StBgWrapper = styled.div`
    background-color: ${props => props.theme.colors.gray};
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    grid-column: full;
    display: grid;
    height: 100vh;
    grid-template-columns: ${props => props.theme.layout.columns};
    z-index: 100;
`

const StMainSection = styled.section`
    grid-column: main;
    display: grid;
    grid-template-columns: minmax(250px, 1fr) 1fr;
    grid-gap: 2em;
    align-items: center;
    height: 100vh;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        margin-top: 150px;
        grid-gap: 0;
    } 
`


interface Props {
    children: ReactNode
}

const MainSection: React.FC<Props>= ({ children }) => 
    // <StBgWrapper>
        <StMainSection>{children}</StMainSection>
    // </StBgWrapper>


export default MainSection