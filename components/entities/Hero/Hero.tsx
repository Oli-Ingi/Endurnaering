import styled from 'styled-components'
import { FC } from 'react'
import Container from '../../elements/Container/Container'
import Intro from '../../modules/Intro/Intro'


export type Props = {
    intro: {
        title: string;
        content: string[];
    }
    img: string;
}


const StHero = styled.div`
    display: flex;
    
    justify-content: space-around;
    padding-top: 2em;
    align-items: center;

    > div {
        max-width: 100%;
        width: 500px;
    }

    img {
        max-width: 500px;
        width: 50%;
    }

    @media screen and (max-width: 750px) {
        flex-wrap: wrap;

        img { width: 90vw; }
    }
`



const Hero: FC<Props> = ({ intro, img }) => 
    <Container as="section" variant="white">
        <StHero>
            <Intro {...intro} animate variant="white" />
            <img src={img} />
        </StHero>
    </Container>


export default Hero