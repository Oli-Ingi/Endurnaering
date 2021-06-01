import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'


export type Props = {
    src: string;
    margin?: string;
}

const StContainer = styled.div<{ margin?: string }>`
    margin: ${p => p.margin || '1em'};
    flex-basis: 400px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
`

const BannerImage: React.FC<Props> = ({ src, margin }) => 
    <StContainer margin={margin}>
        <Image src={src} alt='aðalmynd' width={588} height={596} />
    </StContainer>


export default BannerImage