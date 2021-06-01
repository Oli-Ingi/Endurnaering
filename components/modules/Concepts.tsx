import React from 'react';
import Article from '../elements/Article';
import ClipBg from '../elements/ClipBg';
import Figure from '../elements/Figure';
import Pg from '../elements/Pg';
import Section from '../elements/Section';
import Image from './Image';
import { Header2 } from "../elements/Headers";

const Concepts = () => 
    <Section full col={2} center padVertical gaps>
        <Article col={2} selfCenter>
            <Header2>Næring</Header2>
            <Pg>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam itaque nobis, fuga animi ex nulla non aperiam eligendi expedita?</Pg>
        </Article>
        <Image cols={3} center src='/Naering.png' alt='næring-mynd' width={300} height={300} greenText hoverScale pointer></Image>
        <Article col={2} selfCenter>
            <Header2>Venjur</Header2>
            <Pg>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam itaque nobis, fuga animi ex nulla non aperiam eligendi expedita?</Pg>
        </Article>
        <Image cols={3} center src='/Venjur.png' alt='venjur-mynd' width={300} height={300} greenText hoverScale pointer></Image>
        <Article col={2} selfCenter>
            <Header2>Innsæi</Header2>
            <Pg>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam itaque nobis, fuga animi ex nulla non aperiam eligendi expedita?</Pg>
        </Article>
        <Image cols={3} center src='/Innsaei.png' alt='innsaei-mynd' width={300} height={300} greenText hoverScale pointer></Image>
    </Section>


export default Concepts