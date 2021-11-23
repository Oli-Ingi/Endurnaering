import styled from 'styled-components'
import { FC, useState } from 'react'
import Link from '../../elements/Link/Link'
import Caret from '../../elements/Caret/Caret'


export type Props = {
    title: string;
    links: {
        caption: string;
        to: string;
        newTab?: boolean;
    }[],
    shadow?: boolean;
}


const StDropDown = styled.div<{ isOpen: boolean, shadow?: boolean }>`
    position: relative;

    button {
        background: white;
        border: none;
        outline: none;
        cursor: pointer;

        :hover line {
            stroke: ${p => p.theme.colors.primary};
        }

    }

    ul {
        position: absolute;
        top: 2.8rem;
        border-radius: 5px;
        list-style: none;
        transition-duration: 0.5s;
        margin: 0;
        padding: 0;
        left: -0.5em;
        border: 1px solid #eee;
        border-top-left-radius: -5px;
        width: auto;
        z-index: 5;
        box-shadow: ${p => p.shadow ? " #eee 0px 10px 10px 0px" : undefined };
        border-top: ${p => p.shadow ? "none" : undefined};

        visibility: ${p => p.isOpen ? "visible" : "hidden"};
        transform-origin: 0 0;
        transform: ${p => p.isOpen ? "scaleY(1)" : `scaleY(0)`};
        opacity: ${p => p.isOpen ? 1 : 0};

        li {
            border-bottom: 1px solid #eee;
            background: white;
        }

        a {
            display: block;
            white-space: nowrap;
            padding: 0.7em;
        }
    }

    span {
        display: flex;
        align-items: baseline;
        justify-content: center;
    }
`


const Dropdown: FC<Props> = ({ links, title, shadow }) => {
    const [isOpen, setIsOpen] = useState(false)

    return <StDropDown isOpen={isOpen} shadow={shadow} onBlur={() => setTimeout(() => setIsOpen(false), 100)}>
        <Link onClick={() => setIsOpen(!isOpen)} icon={<Caret isOpen={isOpen} />} iconRight>
            {title}
        </Link>
        <ul>
            {links.map(link => <li key={link.caption} onClick={e => e.stopPropagation()}>
                <Link to={link.to} newTab={link.newTab} noHoverLine>{link.caption}</Link>
            </li>)}
        </ul>
    </StDropDown>
}
    


export default Dropdown