import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'


export type Props = {
    src: string;
    margin?: string;
}

const StImgContainer = styled.div<{ margin?: string }>`
    flex-basis: 400px;
    flex-grow: 1;
    float: right;
    ${p => p.margin && css`margin: ${p.margin};`}
`


const ArticleImage: React.FC<Props> = ({ src, margin }) =>
    <StImgContainer margin={margin}>
        <Image src={src} height={350} width={550} />
    </StImgContainer>


export default ArticleImage