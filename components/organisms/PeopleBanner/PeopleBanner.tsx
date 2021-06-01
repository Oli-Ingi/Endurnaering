import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import PersonImg, { Person } from '../../atoms/PersonImg/PersonImg'


type Props = {
    bgPrimary?: boolean;
    bgSecondary?: boolean;
}

const StBg = styled.section<Props>`
    width: 100%;
    position: relative;
    padding: 2em;
    background-color: ${p => p.bgPrimary 
        ? p.theme.colors.primary 
        : p.bgSecondary 
            ? p.theme.colors.secondary 
            : 'transparent'};
`

type locProps = {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
}

const StLoc = styled.div<locProps>`
    position: absolute;

    ${p => p.top && css`top: ${p.top};`}
    ${p => p.right && css`right: ${p.right};`}
    ${p => p.bottom && css`bottom: ${p.bottom};`}
    ${p => p.left && css`left: ${p.left};`}
`

const PeopleBanner: React.FC<Props> = ({ bgPrimary, bgSecondary, children }) =>
    <StBg bgPrimary={bgPrimary} bgSecondary={bgSecondary}>
        <StLoc left='10vw' bottom='0px'><PersonImg type={Person.withApple} /></StLoc>
        <StLoc right='10vw' bottom='40%'><PersonImg type={Person.withPizza} /></StLoc>
        <StLoc right='33vw' bottom='60%'><PersonImg type={Person.withBurger} /></StLoc>
        <StLoc left='31vw' bottom='30%'><PersonImg type={Person.withIcecream} /></StLoc>
        <StLoc left='22vw' top='30%'><PersonImg type={Person.withNoodles} /></StLoc>
        <StLoc right='22vw' top='50%'><PersonImg type={Person.withPopcorn} /></StLoc>
        {children}
    </StBg>

    export default PeopleBanner