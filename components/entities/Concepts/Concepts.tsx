import { FC } from 'react'
import styled from 'styled-components'
import { MarginHandler } from '../../../styles/common'
import Concept from '../Concept/Concept'


export type Props = {
    concepts: Array<{
        img: string;
        article: {
            title: string;
            content: string[];
            button: {
                caption: string;
                to: string;
                newTab?: boolean;
            };
        }
    }>
} & Margins

const StConcept = styled.article<Margins>`
    ${MarginHandler}
`

const Concepts: FC<Props> = ({ concepts, ...margins }) => 
    <StConcept {...margins}>
        {concepts.map((c, i) => 
            <Concept 
                {...c} 
                key={c.article.title}
                imgPos={i % 2 === 1 ? "bottomLeft" : "bottomRight"} 
                imgOffset 
                variant="secondary"
                marginBottom="7em" 
            />)}
    </StConcept>


export default Concepts