import React from "react";
import Info from "../modules/Info";
import FoodCircle from "../elements/FoodCircle/FoodCircle"
import Section from "../elements/Section";
import GutterGrid from "../elements/GutterGrid";
import styled from "styled-components";


import Image from 'next/image';
import Intro from "../modules/Intro";
import Interview from "../modules/Interview";
import Concepts from "../modules/Concepts";

const StFigure = styled.figure`
    grid-column: 1/3;
    margin: 0;
    display: flex;
    justify-self: center;
`

const Home: React.FC<{}> = () =>
    <GutterGrid as='main' full>
        <Intro />
        <Interview />
        <Concepts />
        {/* <Section full isGray cols={2}>
            <Info col={2} />
            <FoodCircle />
        </Section> */}
        {/* <Section full isGray cols={2} padVertical>
            <StFigure >
                <Image src='/Naeringarfraedingur.png' alt='naeringarfraedingur-mynd' width={950} height={590} />
            </StFigure>
            
        </Section> */}
        {/* <VpSection>
            <Info />
           <FoodCircle />
        </VpSection>
        <FlexSection color={theme.colors.gray} /> */}
    </GutterGrid>


    
export default Home