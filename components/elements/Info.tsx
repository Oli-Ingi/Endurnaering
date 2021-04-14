import React, { ReactNode } from "react";
import styled from "styled-components";




const StInfo = styled.div`
    grid-column: 2;
    grid-row: 2;
    width: 10rem;
    background-color: ${props => props.theme.colors.gray};
    padding: 20px;
    box-shadow: 2px 2px 10px #aaa;
    align-self: end;
    margin-bottom: -70px;
    border-radius: 25px;
    box-shadow: '2px 2px 10px #ccc';

    @media (max-width: 730px) {
        grid-column: 2/4;
        padding: 0;
        margin: 10px;
    }


    p {

    }

    h2 {
        font-size: 1.6em;
        font-weight: bold;
        color: ${props => props.theme.colors.green};
    }
`

interface Props {
    children?: ReactNode
}

const Info = ({ children }: Props) =>
    <StInfo>
        {children}
    </StInfo>



export default Info