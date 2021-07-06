import React from 'react'
import styled from 'styled-components'
//import Image from 'next/image'

type Props = {
    title: string;
}

const StContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2em;
    flex-shrink: 1;
    flex-basis: 350px;

    small {
            margin-left: 20px;
            max-width: 200px;
        }
`

const StImg = styled.img`
    height: 44px;
`

const EmbaettiLandlaeknis: React.FC<Props> = ({ title }) =>
    <StContainer>
        <StImg src='/Embaetti_landlaeknis.png' />
        <small>{title}</small>
    </StContainer>


export default EmbaettiLandlaeknis