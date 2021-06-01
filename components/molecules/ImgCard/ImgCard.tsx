import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'
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
}

type contentProps = {
    src: Types;
    header: string;
    content: string[];
}

export type Props = styleProps & contentProps;


const StCard = styled.div<styleProps>`
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
        <Image src={src} height={300} width={300} />
        <ArticleHeader>{header}</ArticleHeader>
        {content.map(pg => <ArticleText>{pg}</ArticleText>)}
    </StCard>



export default ImgCard