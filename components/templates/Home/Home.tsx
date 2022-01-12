import { FC } from "react"
import styled from 'styled-components'
import Container from "../../elements/Container/Container"
import Img from "../../elements/Img/Img"
import Text from '../../elements/Text/Text'
import Accordion from "../../entities/Accordion/Accordion"
import Concept from "../../entities/Concept/Concept"
import Hero from "../../entities/Hero/Hero"
import Slider from "../../entities/Slider/Slider"
import Section from "../../modules/Section/Section"

/* not used, i think */
export type Props = {
    hero: { 
        intro: { title: string; content: string[]; }
        img: string 
    };
    concepts: {
        article: {
            title: string;
            content: string[];
            button: {
                caption: string;
                to: string;
                newTab?: boolean;
            }
        };
        img: string;
    }[];
    references: {
        title: string;
        items: {
            title: string;
            content: string[];
        }[]
    };
    faq: {
        title: string;
        questions: {
            title: string;
            content: string[];
        }[];
    };
    services: {
        title: string;
        items: { title: string; content: string[], to?: string }[];
    }
}


const StHome = styled.main`
    padding-top: 70px;
`

const Home: FC<Props> = ({ hero, concepts, references, faq, services }) => 
    <StHome>
        {/* <Hero {...hero} /> */}
        <Section title={services.title} variant="secondary">
        </Section>
        <Section variant="white">
            {concepts.map((c, i) => 
                <Concept 
                    {...c} 
                    key={c.article.title}
                    imgPos={i % 2 === 1 ? "bottomLeft" : "bottomRight"} 
                    imgOffset 
                    variant="secondary"
                    marginBottom="7em" 
                />)}
        </Section>
        <Section variant="secondary" title={references.title}>
            <Slider items={references.items} autoSlide autoSlideInterval={5} variant="white" />
        </Section>
        <Section title={faq.title} variant="white">
            <Accordion items={faq.questions} />
        </Section>
    </StHome>



export default Home