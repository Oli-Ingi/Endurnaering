import styled from 'styled-components'
import { FC, useEffect, useRef, useState } from 'react'
import Link from '../../elements/Link/Link'
import Caret from '../../elements/Caret/Caret'
import DropView from '../../elements/DropView/DropView'
import useOutsideClickListener from '../../../hooks/useOutsideClickListener'
import List from '../List/List'


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
        border-radius: 5px;
        list-style: none;
        margin: 0;
        padding: 0;
        border-top-left-radius: -5px;
        width: auto;
        z-index: 5;
        box-shadow: ${p => p.shadow ? " #eee 0px 10px 10px 0px" : undefined };
        border-top: ${p => p.shadow ? "none" : undefined};



        li {
            border: 1px solid #eee;
            border-top: none;
            background: white;
            display: block;
            padding: 10px;
            width: 100%;
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
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const listNode = useRef<HTMLUListElement>(null);
    const dropdownNode = useRef<HTMLDivElement>(null);

    useOutsideClickListener(dropdownNode, () => setIsOpen(false));

    useEffect(() => {
        listNode.current?.offsetHeight !== height && setHeight(listNode.current?.offsetHeight)
    }, [listNode, isOpen])
   
    return <StDropDown isOpen={isOpen} shadow={shadow} ref={dropdownNode}>
        <Link onClick={() => setIsOpen(!isOpen)} noHoverLine icon={<Caret isOpen={isOpen} />} iconRight>
            {title}
        </Link>
        <DropView isOpen={isOpen} $height={height} absolute>
            <List ref={listNode}>
                {links.map(link => <li key={link.caption} onClick={e => e.stopPropagation()}>
                    <Link to={link.to} newTab={link.newTab} noHoverLine inner>{link.caption}</Link>
                </li>)}
            </List>
        </DropView>
    </StDropDown>
}
    


export default Dropdown