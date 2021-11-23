import styled from 'styled-components'
import { FC } from 'react'
import Link from '../../elements/Link/Link'
import { MarginHandler } from '../../../styles/common'

export type Props = {
    title: string;
    links: Array<{ caption: string; to: string; }>;
} & Margins


const StLinkList = styled.ul<Margins>`
    list-style: none;
    padding: 0;
    ${MarginHandler}
    
    li {
        margin: 0.6em 0;
        display: flex;
        font-family: "Roboto", sans-serif;
    }

    li:first-child {
        font-weight: 600;
        font-size: 1.2em;
        
    }
`


const LinkList: FC<Props> = ({ links, title }) =>
    <StLinkList>
        <li>{title}</li>
        {links.map(link => <li key={link.caption}>
            <Link to={link.to}>{link.caption}</Link>
        </li>)}
    </StLinkList>


export default LinkList