import React from 'react'
import { IArticle } from '../../../types/general'
//import Image from 'next/image'
import styled from 'styled-components'
import Article from '../Article/Article'

export type Props = {
    article: IArticle;
    src: string;
}


const StImgContainer = styled.div`
    flex-basis: 400px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
`


const ArticleWithImage: React.FC<Props> = ({ article, src, children }) =>
    <>
        <Article {...article} margin='0 0 2em 0'>{children}</Article>
        <StImgContainer>
            <img src={src} height={350} width={550} />
            {/* <Image src={src} height={350} width={550}  /> */}
        </StImgContainer>
    </>


export default ArticleWithImage