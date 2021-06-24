import React from 'react'
import styled from 'styled-components'
import ConceptImage from '../../atoms/ConceptImage/ConceptImage'
import Concept from '../../molecules/Concept/Concept'

export interface Concept {
    src: string;
    title: string;
}

export type Props = {
    concepts: Concept[];
    margin?: string;
}

const StConcepts = styled.div<{ margin?: string}>`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    margin: ${p => p.margin || 0};
`



const Concepts: React.FC<Props> = ({ concepts, margin }) =>
    <StConcepts margin={margin}>
        {concepts.map(c => <Concept src={c.src} title={c.title}  margin="0 2em"/>)}
    </StConcepts>


export default Concepts