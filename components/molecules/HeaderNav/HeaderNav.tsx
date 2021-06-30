import React from 'react'
import styled from 'styled-components'
import Link from '../../atoms/Link/Link'


type Props = {
    fraedsla: { title: string; to: string; };
    aboutUs: { title: string; to: string; }
}


const StNav = styled.nav`
    display: flex;

    a {
        margin: 0 1em;
    }
`

const HeaderNav: React.FC<Props> = ({ fraedsla, aboutUs }) =>
    <StNav>
        <Link to={fraedsla.to}>{fraedsla.title}</Link>
        <Link to={aboutUs.to}>{aboutUs.title}</Link>
    </StNav>



export default HeaderNav