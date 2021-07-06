import React from 'react'
import styled, { css } from 'styled-components'
//import Image from 'next/image'
import ArticleHeader from '../../atoms/ArticleHeader/ArticleHeader'
import ArticleText from '../../atoms/ArticleText/ArticleText'

export enum Types {
    Innsaei = '/Innsaei.png',
    Venjur = '/Venjur.png',
    Naering = '/Naering.png'
}

type styleProps = {
    bgPrimary?: boolean;
    bgSecondary?: boolean;
    shadow?: boolean;
    margin?: string;
}

type contentProps = {
    src: Types;
    header: string;
    content: string[];
}

export type Props = styleProps & contentProps;


const StCard = styled.div<styleProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    ${p => p.margin && css`margin: ${p.margin};`}
    
`

const StImgContainer = styled.div`
    flex-basis: 200px;
    flex-grow: 1;
    margin-right: 2em;
`

const StArticleContainer = styled.div<{ bgPrimary?: boolean, bgSecondary?: boolean, shadow?: boolean }>`
    flex-basis: 600px;
    flex-grow: 1;
    padding: 1em;
    background-color: ${p => p.bgPrimary 
        ? p.theme.colors.primary 
        : p.bgSecondary
            ? p.theme.colors.secondary
            : p.theme.colors.white};
    color: ${p => p.bgPrimary ? p.theme.colors.secondary : p.theme.colors.dark};
    ${p => p.shadow && css`box-shadow: 0 0 10px #aaa;`}
`

const ImgCard: React.FC<Props> = ({ src, header, content, ...styleProps }) =>
    <StCard {...styleProps}>
        <StImgContainer ><img src={src} height={300} width={300} /></StImgContainer>
        <StArticleContainer {...styleProps}>
            <ArticleHeader>{header}</ArticleHeader>
            {content.map(pg => <ArticleText>{pg}</ArticleText>)}
        </StArticleContainer>
    </StCard>



export default ImgCard



    /* background-color: ${p => p.bgPrimary 
        ? p.theme.colors.primary 
        : p.bgSecondary
            ? p.theme.colors.secondary
            : p.theme.colors.white};
    color: ${p => p.bgPrimary ? p.theme.colors.secondary : p.theme.colors.dark}; */