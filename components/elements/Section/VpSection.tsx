import styled, { keyframes } from "styled-components";
import React, { ReactNode } from 'react'


const fadeUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50vh);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
`


const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    grid-column: full;
    display: grid;
    grid-template-columns: minmax(1em, 1fr) minmax(min-content, 40em) minmax(min-content, 40em) minmax(1em, 1fr);
    grid-gap: 2em;
    align-items: center;
    grid-template-rows: 90px;
    background-color: transparent;

    @media (max-width: 700px) {
        grid-template-rows: 180px;
    }
`

const BG = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(100% 40%, 100% 100%, 0 100%, 0 90%);
    background-color: ${props => props.theme.colors.gray};
    grid-column: span 4;
    z-index: -1;
    animation: ${fadeUp} 1s forwards;
    opacity: 0;
    animation-delay: 3s;
`



interface Props {
    children: ReactNode
}

const VpSection: React.FC<Props>= ({ children }) => 
    <Wrapper>
        <BG />
        {children}
    </Wrapper>


export default VpSection