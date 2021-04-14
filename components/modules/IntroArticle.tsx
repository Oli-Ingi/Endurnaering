import React from 'react'
import styled from 'styled-components';
import Article from '../elements/Article'
import Button from '../elements/Button';
import { Header2 } from "../elements/Headers";
import Pg from '../elements/Pg';

const StSpan = styled.span`
    display: block;
`

const IntroArticle = () => 
    <Article mediaCenter mediaCol='2/4'>
        <Header2>Upplifðu frelsi. <StSpan>Njóttu þess að borða.</StSpan></Header2>
        <Pg large>Við styðjum þig í vegferð í átt að <StSpan>bættum lífsgæðum.</StSpan></Pg>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button as='a' href="/" style={{ margin: '1em 5px' }} invert>Mæta í viðtal</Button>
            <Button as='a' href="/" style={{ margin: '0em 5px' }}>Bóka viðtal</Button>
        </div>
    </Article>


export default IntroArticle