import React from 'react'
import styled from 'styled-components'
import { IAnchor } from '../../../types/general'
import Button from '../../atoms/Button/Button'

const getWidth = (lg?: boolean) =>
    lg ? 180 : 160;

export type Props = {
    lg?: boolean;
    margin?: string;
}

const StNav = styled.nav<Props>`
    display: flex;
    justify-content: center;
    margin: ${p => p.margin || '3px 0'};

    a, button {
        margin: 5px 8px 5px 0;
        text-align: center;
        width: ${p => p.lg ? 180 : 170}px;
    }

    a:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 450px) {
        a, button {
            width: ${p => p.lg ? 170 : 150}px;
        }
    }
`

const BtnNav: React.FC<Props> = ({ lg, margin, children }) =>
    <StNav margin={margin}>
        <Button as="a" href="https://app.karaconnect.com/company/1115/registration?auth=2" lg={lg} bold>Bóka viðtal</Button>
        <Button as="a" href="/" lg={lg} bold secondary>Mæta í viðtal</Button>
        {children}
    </StNav>

export default BtnNav