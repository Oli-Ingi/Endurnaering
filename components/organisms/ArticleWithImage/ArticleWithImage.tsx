import React from 'react'
import ArticleHeader from '../../atoms/ArticleHeader/ArticleHeader'
//import Image from 'next/image'
import styled from 'styled-components'

type TextProps = {
    src: string;
    title: string;
    content: JSX.Element;
    margin?: string;
    imgBasis?: number;
}

type ChildrenProps = {
    src: string;
    title: string;
    children: JSX.Element;
    margin?: string;
    imgBasis?: number;
}

type Props = TextProps | ChildrenProps;

const TextContainer = styled.div`
    margin-top: -1em;
`

// Extract generalized img. size, height, width, margin.
const ImgContainer = styled.div<{ imgBasis?: number }>`
    flex-basis: ${p => p.imgBasis || 350}px;
    margin: auto;
    margin-bottom: 50px;

    @media screen and (max-width: 940px) {
        display: none;
    }
    
`

const TitleContainer = styled.div`
    background-color: ${p => p.theme.colors.gray};
    border-radius: 15px;
    padding: 1em 2.5em;
    margin: 0 0 4.5em -2.5em;

    @media screen and (max-width: 940px){
        margin: 0 0 2em 0;
        padding: 0;
    }
`

const StHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap-reverse;
`

const ArticleContainer = styled.div<{ margin?: string }>`
    margin: ${p => p.margin || 0};

    @media screen and (max-width: 940px) {
        margin: 0;
    }
`

const ArticleWithImage: React.FC<Props> = ({ src, children, title, margin, imgBasis }) =>
    <ArticleContainer margin={margin}>
        <StHeader>
            <TitleContainer>
                <ArticleHeader margin="0">{title}</ArticleHeader>
            </TitleContainer>
            <ImgContainer imgBasis={imgBasis}>
                <img src={src} height={350} width={550} />
            </ImgContainer>
        </StHeader>
        <TextContainer>
            {children}
        </TextContainer>
    </ArticleContainer>


export default ArticleWithImage