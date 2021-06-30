import React from 'react'
import styled from 'styled-components'
import ArticleHeader from '../../atoms/ArticleHeader/ArticleHeader'


type Props = {
    lgHeader?: boolean;
    header: string;
}

const StArticle = styled.div`
    width: 100%;
    margin: 1em 0;
`

const SkilmalarArticle: React.FC<Props> = ({ header, lgHeader, children }) =>
    <StArticle>
        <ArticleHeader lg={lgHeader} margin="0 0 0.5em 0">{header}</ArticleHeader>
        {children}
    </StArticle>


export default SkilmalarArticle