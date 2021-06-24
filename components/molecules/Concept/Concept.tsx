import React from 'react'
import styled from 'styled-components'
import ArticleHeader from '../../atoms/ArticleHeader/ArticleHeader'
import ConceptImage from '../../atoms/ConceptImage/ConceptImage'


type Props = {
    src: string;
    imgSize?: number;
    title: string;
    margin?: string;
}

const StCard = styled.div<{ margin?: string}>`
    margin: ${p => p.margin || 0};
`

const Concept: React.FC<Props> = ({ src, imgSize, title, margin }) =>
    <StCard margin={margin}>
        <ConceptImage src={src} size={imgSize} />
        <ArticleHeader margin="1em 0" center>{title}</ArticleHeader>
    </StCard>


export default Concept