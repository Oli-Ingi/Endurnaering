import React from 'react'
import styled from 'styled-components'
import ImgCard, { Types } from '../../molecules/ImgCard/ImgCard'

export interface Concept {
    src: Types;
    header: string;
    content: string[];
}

export type Props = {
    concepts: Concept[];
    bgPrimary?: boolean;
    bgSecondary?: boolean;
    shadow?: boolean;
    cardMargins?: string;
}

// const StConcepts = styled.section`
//     display: flex;
//     justify-content: space-evenly;
//     align-items: stretch;
// `

const Concepts: React.FC<Props> = ({ concepts, bgPrimary, bgSecondary, shadow, cardMargins }) =>
    <>
        {concepts.map(c => 
            <ImgCard {...c} bgPrimary={bgPrimary} bgSecondary={bgSecondary} shadow={shadow} margin={cardMargins} />)}
    </>


export default Concepts