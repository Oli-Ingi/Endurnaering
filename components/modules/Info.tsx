import React, { ReactNode } from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import InfoHeader from "../elements/InfoHeader/InfoHeader";




const StInfo = styled.article<Props>`
    grid-column: ${props => props.col || 2};
    justify-self: center;
    margin: 2em;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    animation: ease forwards fadeIn 1s;
    opacity: 0;

    @media (max-width: 730px) {
        grid-column: 2/4;
        padding: 0;

        align-items: center;

        p { text-align: center; }
    }
`

const StText = styled.p`
    font-size: 1.4em;
    margin-top: 5px;
`

const StSpan = styled.span`
    display: block;
`

interface Props {
    col?: number;
}


const Info: React.FC<Props> = ({ col }) => 
    <StInfo col={col}>
        <InfoHeader>Upplifðu frelsi. <StSpan>Njóttu þess að borða.</StSpan></InfoHeader>
        <StText>Við styðjum þig í vegferð í átt að <StSpan>bættum lífsgæðum.</StSpan></StText>
        <Button shadow as='a' large href="/" style={{ margin: '1em 0 0 0' }}>Bóka viðtal</Button>
    </StInfo>



export default Info