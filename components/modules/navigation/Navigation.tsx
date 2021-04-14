import React, { ReactNode } from 'react';
import styled, { keyframes } from "styled-components";
import ListInline from '../../elements/ListInline';

const slideIn = keyframes`
    to {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`

const StNav = styled.nav`
   animation: ${slideIn} 1s forwards;
   justify-self: end;
   grid-column: 3;

   @media (max-width: 730px) {
       grid-column: 2/4;
       justify-self: center;
   }
`

// const StNav = styled.nav`
//     justify-self: end;
//     opacity: 0;
//     transform: translateX(-10em);
//     animation: ${slideIn} 0.5s forwards;
//     animation-delay: 4.2s;

//     @media (max-width: 800px) {
//         width: 100%;
//         justify-content: center;
//         margin-top: 100px;
//   }
// `



interface Props { 
    children: ReactNode
}


const Nav = ({ children }: Props) => 
    <StNav>
        <ListInline>
            {React.Children.map(children, (child, _) => <li>{child}</li>)}
        </ListInline>
    </StNav>


export default Nav