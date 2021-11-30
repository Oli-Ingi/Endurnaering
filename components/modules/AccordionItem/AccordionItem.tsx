import { FC, MouseEventHandler, useRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Text from '../../elements/Text/Text'
import { v4 as uuid } from 'uuid'
import Toggler from '../../elements/Toggler/Toggler'
import { useResizeObserver } from '../../../hooks/useResize'
import DropView from '../../elements/DropView/DropView'

export type Props = {
    onClick: MouseEventHandler;
    item: { title: string; content: string[] };
    isOpen: boolean;
}


const StAccordionItem = styled.li`
    border-bottom: 1px solid #eee;
`

const StHeader = styled.button<{ isOpen: boolean}>`
    width: 100%;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    padding: 1em 0;
    ${p => p.isOpen && css`color: ${p.theme.colors.primary};`}

    p { transition-duration: 0.3s; }
    svg { margin-right: 1em; }

    :hover p { color: ${p => p.theme.colors.primary}; }
`



const AccordionItem: FC<Props> = ({ onClick, item, isOpen }) => {
    const contentNode = useRef<HTMLDivElement>();
    const [height, setHeight] = useState(0);

    useResizeObserver(() => 
        contentNode && contentNode.current.offsetHeight !== height && setHeight(contentNode.current.offsetHeight));

    return <StAccordionItem>
        <StHeader onClick={onClick} isOpen={isOpen}>
            <div><Toggler isOpen={isOpen} /></div>
            <Text bold>{item.title}</Text>
        </StHeader>
        <DropView isOpen={isOpen} $height={height}>
            <div ref={contentNode} style={{ paddingBottom: '1em' }}>
                {item.content.map(p => <Text key={uuid()}>{p}</Text>)}
            </div>
        </DropView>
    </StAccordionItem>
}
    



export default AccordionItem