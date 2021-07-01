import React from 'react'
import styled, { css } from 'styled-components'
import ArticleHeader from '../../atoms/ArticleHeader/ArticleHeader'


type Props = {
    lgHeader?: boolean;
    header: string;
    lineHeader?: boolean;
    inner?: boolean;
    marginTop?: boolean;
}

const StArticle = styled.div<{ inner?: boolean, marginTop?: boolean }>`
    width: 100%;
    margin: ${p => p.inner ? ' 1em 0 1em 2em' : '1em 0'};

    ${p => p.marginTop && css`margin-top: 3em;`}
`

const SkilmalarArticle: React.FC<Props> = ({ header, lgHeader, children, lineHeader, inner, marginTop }) =>
    <StArticle inner={inner} marginTop={marginTop}>
        <ArticleHeader lg={lgHeader} line={lineHeader} margin="0 0 0.5em 0">{header}</ArticleHeader>
        {children}
    </StArticle>


export default SkilmalarArticle