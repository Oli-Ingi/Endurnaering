import styled, { css } from 'styled-components'
import { FC, MouseEventHandler } from 'react'
import Title from '../../elements/Title/Title';
import Line from '../../elements/Line/Line';
import { fadeDown } from '../../../styles/keyframes';
import Text from "../../elements/Text/Text";
import { v4 as uuid } from 'uuid'


export type Props = {
    title: string;
    subtitle?: string;
    content: string[];
    onButtonClick: MouseEventHandler<HTMLElement>;
    buttonCaption: string;
    img: string;
}


// const StHero = styled.div`
//     display: flex;
    
//     justify-content: space-around;
//     padding-top: 2em;
//     align-items: center;

//     > div {
//         max-width: 100%;
//         width: 570px;
//     }

//     img {
//         max-width: 500px;
//         width: 50%;
//     }

//     @media screen and (max-width: 920px) {
//         flex-wrap: wrap;

//         img { width: 90vw; }
//     }
// `


const StDiv = styled.div`
    /* width: 100%;
    background-image: url("/hsvm-heiddis.png");
    background-size: cover;
    background-repeat: no-repeat; */
    aspect-ratio: 16/9;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`

const StSection = styled.div`
    padding: 3rem 1rem;
    backdrop-filter: blur(3px);
    box-shadow: ${p => p.theme.shadow};
    margin: 1rem;
    background-color: rgba(255, 255, 255, .6);
    border-radius: 20px;
    max-width: 600px;
    padding: 3rem 1rem;
    grid-column: 2;
    margin-left: 10vw;

    @media screen and (max-width: 700px) {
        padding: 1rem;
        margin: 0;
        width: 100%;
        max-width: unset;
        height: 100%;
        border-radius: 0;
        background-color: rgba(255, 255, 255, .75);
    }   
`

const StImg = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%; /* Maintain aspect ratio */
    object-fit: cover; /* Crop image as needed */
    object-position: bottom right;
`

const StSubtitle = styled.span`
    display: block;
    font-weight: 300;
    margin-top: 10px;
`

const StLineContainer = styled.div<{ width?: number, margin?: string, center?: boolean }>`
    position: relative;
    margin: ${p => p.margin || "5px 0"};
    width: ${p => p.width || 100}%;
    ${p => p.center && css`display: flex;`}
`
    
const StContent = styled.div`
    opacity: 0;
    animation: ${fadeDown} 1s forwards;
    animation-delay: 1.5s;
`

const Hero: FC<Props> = ({ img, ...intro }) => 
    <StDiv>
        <StImg src="/hsvm-heiddis.png" />
        <StSection>
            <Title variant="huge">{intro.title} <StSubtitle>{intro.subtitle}</StSubtitle></Title>
            <StLineContainer width={70} margin="1em 0 1.5em 0" center>
                <Line animate delay={1} variant="primary" />
            </StLineContainer>
            <StContent>
            {intro.content.map(p => 
                <Text 
                    key={uuid()} 
                    mb={8} 
                    size="lg"
                >
                    {p}
                </Text>)}
        </StContent>
        </StSection>
    </StDiv>
    // <Container as="section" variant="white">
    //     <StHero>
    //         <Intro {...intro} buttonIcon="play" animate variant="white" />
    //         <img src="/hsvm-heiddis.png" />
    //     </StHero>
    // </Container>


export default Hero