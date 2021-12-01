import styled from 'styled-components'
import { FC } from 'react'
import Container from '../../elements/Container/Container'
import Contact from '../../modules/Contact/Contact'
import ListNav from '../ListNav/ListNav'
import Divider from '../../modules/Divider/Divider'
import Affiliates from '../../modules/Affiliates/Affiliates'
import SocialMedia from '../../modules/SocialMedia/SocialMedia'

export type Props = {
    contact: {
        title: string;
        tel: {
            link: string;
            caption: string;
        }
        hours: {
            desc: string;
            period: string;
        }
        email: string;
    };
    nav: {
        title: string;
        links: { caption: string; to: string; }[];
    }[];
    orgInfo: { caption: string; }[];
    
    smallOrgInfo?: boolean;
    subLinks: { caption: string; to: string; newTab?: boolean; }[];
    affiliates: {
        img: string;
        to: string;
        alt?: string;
    }[];
    socialMedia: 
    {
        src: string;
        alt?: string;
        to: string;
    }[]
}


const StTopFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1em 0;

    > div, > section, > nav {
        margin: 2em 0;
    }
`

const StSubFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5em 1em;

    @media screen and (max-width: 660px) {
        flex-direction: column-reverse;
    }
`

const Footer: FC<Props> = ({ contact, nav, orgInfo, smallOrgInfo, subLinks, affiliates, socialMedia }) => 
    <footer>
        <Container variant="secondary" border="top">
            <StTopFooter>
                <Contact {...contact} />
                <ListNav navItems={nav} />
            </StTopFooter>
        </Container>
        <Container variant="primary">
            <Divider {...smallOrgInfo && { size: "sm" }} values={orgInfo} thick variant="white" />
        </Container>
        <Container variant="white">
            <StSubFooter>
                <Affiliates logos={affiliates} height={40} />
                <Divider values={subLinks} />
                <SocialMedia logos={socialMedia} />
            </StSubFooter>
        </Container>
    </footer>


export default Footer