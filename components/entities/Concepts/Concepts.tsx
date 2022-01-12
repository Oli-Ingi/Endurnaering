import { FC } from 'react'
import styled from 'styled-components'
import { MarginHandler } from '../../../styles/common'
import Section from '../../modules/Section/Section'
import Concept from '../Concept/Concept'


export type Props = {
    title: string | JSX.Element;
    concepts: Array<{
        img: string;
        article: {
            title: string;
            content: string[];
            button?: {
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

const Concepts: FC<Props> = ({ concepts, title, ...margins }) => 
    <Section title={title}>
        <StConcept {...margins}>
            {concepts.map((c, i) => 
                <Concept 
                    {...c} 
                    key={c.article.title}
                    imgPos={i % 2 === 0 ? "bottomLeft" : "bottomRight"} 
                    imgOffset 
                    variant="secondary"
                    marginBottom="6em" 
                />)}
        </StConcept>
    </Section>
    


export default Concepts