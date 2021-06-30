import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

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

const EmbaettiLandlaeknis: React.FC<Props> = ({ title }) =>
    <StContainer>
        <Image src='/Embaetti_landlaeknis.png' width={102} height={44} />
        <small>{title}</small>
    </StContainer>


export default EmbaettiLandlaeknis