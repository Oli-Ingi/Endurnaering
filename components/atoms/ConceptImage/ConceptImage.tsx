import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

type Props = {
    src: string;
    size?: number;
    margin?: string;
}

const ImgContainer = styled.div<{ margin?: string }>`
    margin: ${p => p.margin || 0};

`

const ConceptImage: React.FC<Props> = ({ src, size, margin }) =>
    <ImgContainer margin={margin} >
        <Image src={src} width={(size || 1) * 568} height={(size || 1) * 568} />
    </ImgContainer>



export default ConceptImage