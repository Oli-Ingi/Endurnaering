import React from 'react'
import styled from 'styled-components'
import { IAnchor } from '../../../types/general'
import Button from '../../atoms/Button/Button'
import Flag from '../../atoms/Flag/Flag'
import InterviewButton from '../../atoms/InterviewButton/InterviewButton'
import Logo from '../../atoms/Logo/Logo'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import BtnNav from '../../molecules/InterviewButtons/InterviewButtons'
import HeaderActions from '../../molecules/HeaderActions/HeaderActions'
import InterviewButtons from '../../molecules/InterviewButtons/InterviewButtons'
import HeaderNav from '../../molecules/HeaderNav/HeaderNav'

export type Props = {
}

const StHeader = styled.header`
    width: 100%;
    box-shadow: 0 0 10px #aaa;
    position: fixed;
    background-color: ${p => p.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;

    @media screen and (max-width: 620px) {
        flex-direction: column;
        align-items: stretch;
    }
`

const StNav = styled.nav`
    display: flex;
    justify-content: center;
`

const BtnContainer = styled.div`
    @media screen and (max-width: 620px) {
        display: none;
    }
`

const Header: React.FC<Props> = () =>
    <StHeader>
            <Logo height={70} bgPrimary />
            {/* <HeaderNav fraedsla={{ to: '/fraedsla', title: 'Fræðsla' }} aboutUs={{ to: '/um-okkur', title: 'Um okkur' }} />  */}
            <BtnContainer>
                <InterviewButtons margin='0.5em 0 0 1em' />
                </BtnContainer>
    </StHeader>

export default Header