import React from 'react'
import styled from 'styled-components';
import Article from '../elements/Article'
import Button from '../elements/Button';
import { Header3 } from "../elements/Headers";
import Pg from '../elements/Pg';



const InterviewArticle = () => 
    <Article col={3} mediaFirst selfCenter mediaCenter mediaCol='2/4'>
        <Header3>Í hverju felst stuðningur hjá næringarfræðingi?</Header3>
        <Pg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste distinctio odio obcaecati placeat inventore. Commodi repellat, aliquid et ab provident blanditiis dicta ratione unde dolorem laudantium quidem dolores consequuntur ut!</Pg>
        <Pg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, corporis.</Pg>
        <Pg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui possimus obcaecati quis at debitis delectus voluptate.</Pg>
    </Article>


export default InterviewArticle