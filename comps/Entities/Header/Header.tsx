import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../../elements/Logo/Logo'
import InterviewNav from '../../modules/InterviewNav/InterviewNav'
import Nav from '../../modules/Nav/Nav'
import Dropdown from '../../modules/Dropdown/Dropdown'
import { useMedia } from '../../../hooks/useMedia'
import Burger from '../../elements/Burger/Burger'

type Button = {
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
        links: { caption: string; to: string; }[]
     }>;
    interview: {
        book: Button;
        attend: Button;
        title: string;
    }
    flag?: {},
    shadow?: boolean;
}


const StHeader = styled.div<Pick<Props, "shadow">>`
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

    > div {
        width: ${p => p.theme.layout.containerWidth};
        padding: 0 1em;
    }


    @media screen and (max-width: 670px) {
        background-color: ${p => p.theme.colors.primary};
        align-items: stretch;
        
        > div, > nav {
            display: none;
        }

        .burger {
            display: block;
            border-left: 1px solid ${p => p.theme.colors.white};
        }
    }

    
`


const Header: FC<Props> = ({ navItems, interview, flag, shadow }) => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

    return <StHeader shadow={shadow} as="header">
        <Logo variant="primary" />
        <div>
            <Nav items={navItems} lgMarginBetween thick dropShadow={shadow} />
        </div>
        <InterviewNav {...interview} dropShadow={shadow} />
        <Burger onClick={() => setBurgerMenuIsOpen(!burgerMenuIsOpen)} isOpen={burgerMenuIsOpen} variant="white" />
    </StHeader>
}
    



export default Header