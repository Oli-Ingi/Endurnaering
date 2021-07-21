import React from 'react'
import styled from 'styled-components'
import { displayFadeIn } from '../../../styles/keyframes'

type Props = {
    delay: number;
}


const Overlay = styled.div<Props>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
    z-index: 100;
    animation: ${displayFadeIn} 1s forwards;
    animation-delay: ${p => p.delay}s;
`


export default Overlay