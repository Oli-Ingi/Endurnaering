import { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import Logo from '../../elements/Logo/Logo'
import InterviewNav from '../../modules/InterviewNav/InterviewNav'
import Nav from '../../modules/Nav/Nav'
import Burger from '../../elements/Burger/Burger'
import { fadeIn, fadeOut } from '../../../styles/keyframes'
import BulletList from '../../elements/BulletList/BulletList'
import Text from '../../elements/Text/Text'
import Link from '../../elements/Link/Link'

type Link = {
    to: string;
    caption: string;
}

export type Props = {
    navItems: Array<{
        caption: string;
        to: string;
        links?: never;
    } | { 
        caption: string;
        to?: never;
        links: Link[]
     }>;
    interview: {
        book: Link;
        attend: Link;
        title: string;
    }
    flag?: {},
    shadow?: boolean;
}


const StHeader = styled.div<Pick<Props, "shadow"> & { isOpen?: boolean; }>`
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 100;

    background-color: white;

    justify-content: space-between;
    align-items: center;
    box-shadow: ${p => p.shadow ? p.theme.shadow : undefined};

    .burger {
        display: none;
    }

    > div:nth-child(2) {
        width: ${p => p.theme.layout.containerWidth};
        padding: 0 1em;
    }


    @media screen and (max-width: 750px) {
        background-color: ${p => p.theme.colors.primary};
        align-items: stretch;
        
        > div:nth-child(2), > nav {
            display: none;
        }

        .burger {
            display: block;
        }
    }

    
`

const StMenu = styled.div<{ isOpen: boolean; initial: boolean }>`
    position: fixed;
    top: 70px;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    background-color: ${p => p.theme.colors.primary};
    display: flex;
    visibility: hidden;
    align-items: center;
    justify-content: center;
    ${p => !p.initial && css`
        animation: ${p.isOpen ? fadeIn : fadeOut} .3s ease-in-out forwards;
    `}
    box-sizing: border-box;
`

// TODO : extract menu
const Header: FC<Props> = ({ navItems, interview, flag, shadow }) => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
    const [initial, setInitial] = useState(true);
    
    const toggleMenu = () => {
        initial && setInitial(false);
        setBurgerMenuIsOpen(!burgerMenuIsOpen);
    }

    return <StHeader shadow={shadow} as="header">
        <Logo variant="primary" />
        <div>
            <Nav items={navItems} lgMarginBetween dropShadow={shadow} />
        </div>
        <InterviewNav {...interview} dropShadow={shadow} />
        <Burger onClick={toggleMenu} isOpen={burgerMenuIsOpen} variant="white" />
        <StMenu isOpen={burgerMenuIsOpen} initial={initial}>
            <nav>
                <Text as="span" bold color="white" size="lg">??j??nustulei??ir</Text>
                <BulletList variant="secondary" spaceLg noMargin>
                    <li><Link variant="white" permaLine to="/vidtol">Einstaklingsvi??t??l</Link></li>
                    <li><Link variant="white" permaLine to="/namskeid">N??mskei??</Link></li>
                    <li><Link variant="white" permaLine to="/fyrirlestrar">Fyrirlestrar</Link></li>
                </BulletList>
                <Text as="span" bold color="white" size="lg">Vi??t??l</Text>
                <BulletList variant="secondary" spaceLg noMargin>
                    <li><Link variant="white" permaLine to="https://app.karaconnect.com/company/1115/registration?auth=2">B??ka vi??tal</Link></li>
                    <li><Link variant="white" permaLine to="https://app.karaconnect.com/login?cid=1115">M??ta ?? vi??tal</Link></li>
                </BulletList>
                <Text as="span" bold color="white" size="lg">Um okkur</Text>
                <BulletList variant="secondary" spaceLg noMargin>
                    <li><Link variant="white" permaLine to="/um-okkur">Endurn??ring</Link></li>
                    <li><Link variant="white" permaLine to="/um-okkur#starfsfolk">Starfsf??lk</Link></li>
                    <li><Link variant="white" permaLine to="/skilmalar">Skilm??lar og pers??nuvernd</Link></li>
                </BulletList>
            </nav>
        </StMenu>
    </StHeader>
}
    



export default Header