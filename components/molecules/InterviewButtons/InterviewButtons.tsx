import React from 'react'
import styled, { css } from 'styled-components'
import { fade, fadeDown, fadeType } from '../../../styles/keyframes'
import Button from '../../atoms/Button/Button'
import InterviewButton from '../../atoms/InterviewButton/InterviewButton'

export type Props = {
    lg?: boolean;
    margin?: string;
    fader?: fadeType;
    fadeDelay?: number;
}

const StNav = styled.nav<Props>`
    display: flex;
    justify-content: stretch;
    flex-wrap: wrap;
    margin: ${p => p.margin || '3px 0'};
    opacity: ${p => p.fadeDelay ? 0 : 1};
    
    ${p => p.fader && css`animation: ${fade(p.fader)} 1s forwards;`}
    animation-delay: ${p => p.fadeDelay || 1}s;

    a, button {
        text-align: center;
        flex-grow: 1;
    }

    @media screen and (max-width: 450px) {
        a, button {
        }
    }
`

const InterviewButtons: React.FC<Props> = ({ lg, margin, children, fadeDelay, fader }) =>
    <StNav margin={margin} fadeDelay={fadeDelay} fader={fader}>
        <InterviewButton lg={lg} margin='0.5em 1em 0.5em 0' />
        <InterviewButton lg={lg} margin='0.5em 1em 0.5em 0' attend />
        {/* <Button as="a" href="https://app.karaconnect.com/company/1115/registration?auth=2" lg={lg} bold margin='0.5em 1em 0.5em 0'>Bóka fjarviðtal</Button>
        <Button as="a" href="/" lg={lg} bold secondary margin='0.5em 1em 0.5em 0'>Mæta í viðtal</Button> */}
        {children}
    </StNav>

export default InterviewButtons