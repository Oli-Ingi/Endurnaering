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
    flex-basis: 350px;
    flex-shrink: 1;

    small {
            max-width: 300px;
            margin-left: 20px;
        }

    @media screen and (max-width: 800px) {
        margin-top: 1em;
    }
`

const Mni: React.FC<Props> = ({ title }) =>
    <StContainer>
        <Image src='/mni.png' width={52} height={44} />
        <small>{title}</small>
    </StContainer>


export default Mni