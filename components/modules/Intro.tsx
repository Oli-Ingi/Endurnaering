import React from 'react';
import ClipBg from '../elements/ClipBg';
import FoodCircle from '../elements/FoodCircle/FoodCircle';
import Section from '../elements/Section';
import IntroArticle from './IntroArticle';



const Intro = () =>
    <Section full isGray col={2} padVertical gaps>
        <ClipBg />
        <IntroArticle />
        <FoodCircle />
    </Section>


export default Intro