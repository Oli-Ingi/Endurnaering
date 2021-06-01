import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button/Button'
import InterviewButton from '../../atoms/InterviewButton/InterviewButton'

export type Props = {
    lg?: boolean;
    margin?: string;
}

const StNav = styled.nav<Props>`
    display: flex;
    justify-content: stretch;
    flex-wrap: wrap;
    margin: ${p => p.margin || '3px 0'};

    a, button {
        text-align: center;
        flex-grow: 1;
    }

    @media screen and (max-width: 450px) {
        a, button {
        }
    }
`

const InterviewButtons: React.FC<Props> = ({ lg, margin, children }) =>
    <StNav margin={margin}>
        <InterviewButton lg={lg} margin='0.5em 1em 0.5em 0' />
        <InterviewButton lg={lg} margin='0.5em 1em 0.5em 0' attend />
        {/* <Button as="a" href="https://app.karaconnect.com/company/1115/registration?auth=2" lg={lg} bold margin='0.5em 1em 0.5em 0'>Bóka fjarviðtal</Button>
        <Button as="a" href="/" lg={lg} bold secondary margin='0.5em 1em 0.5em 0'>Mæta í viðtal</Button> */}
        {children}
    </StNav>

export default InterviewButtons