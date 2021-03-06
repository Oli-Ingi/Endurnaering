import { FC, MouseEventHandler, useRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Text from '../../elements/Text/Text'
import { v4 as uuid } from 'uuid'
import Toggler from '../../elements/Toggler/Toggler'
import { useDynamicHeight } from '../../../hooks/useDynamicHeight'
import DropView from '../../elements/DropView/DropView'

export type Props = {
    onClick: MouseEventHandler;
    item: { title: string; content: string[] };
    isOpen: boolean;
}


const StAccordionItem = styled.li`
    border-bottom: 1px solid ${p => p.theme.colors.primaryMiddle};
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

    > div {
        padding: 3px 0;
    }

    @media screen and (max-width: 700px) {
        > p {
            font-size: 1rem;
        }
    }
`

const StContentWrapper = styled.div`
    padding-bottom: 1rem;

    @media screen and (max-width: 700px) {
        > p {
            font-size: 1rem;
        }
    }
`


const AccordionItem: FC<Props> = ({ onClick, item, isOpen }) => {
    const contentNode = useRef<HTMLDivElement>();
    const height = useDynamicHeight(contentNode);
    //const [height, setHeight] = useState(0);

    //useResizeObserver(() => 
    //    contentNode && contentNode.current.offsetHeight !== height && setHeight(contentNode.current.offsetHeight));

    return <StAccordionItem>
        <StHeader onClick={onClick} isOpen={isOpen}>
            <div><Toggler isOpen={isOpen} /></div>
            <Text bold >{item.title}</Text>
        </StHeader>
        <DropView isOpen={isOpen} $height={height}>
            <StContentWrapper ref={contentNode} style={{ paddingBottom: '1em' }}>
                {item.content.map(p => <Text key={uuid()}>{p}</Text>)}
            </StContentWrapper>
        </DropView>
    </StAccordionItem>
}
    



export default AccordionItem