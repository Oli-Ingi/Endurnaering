import styled from 'styled-components'
import { FC } from 'react'
import LinkList from '../../modules/LinkList/LinkList'


export type Props = {
    navItems: {
        title: string;
        links: { caption: string; to: string; }[];
    }[];
    animateLinks?: boolean;
}


const StListNav = styled.nav`
    display: flex;
    flex-wrap: wrap;

    > ul {
        margin: 0 2em;
    }

    > ul:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 660px) {
        display: none;
    }
`

const ListNav: FC<Props> = ({ navItems, animateLinks }) => 
    <StListNav>
        {navItems.map(list => <LinkList key={list.title} animate={animateLinks} {...list} />)}
    </StListNav>


export default ListNav