import { FC, useState } from 'react'
import styled from 'styled-components'
import AccordionItem from '../../modules/AccordionItem/AccordionItem'

export type Props = {
    items: { title: string; content: string[] }[];
}

const StAccordion = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
`

const Accordion: FC<Props> = ({ items }) => {
    const [openID, setOpenID] = useState<number | null>(null);

    return <StAccordion>
        {items.map((it, i) => <AccordionItem 
            key={it.title}
            item={it}
            isOpen={openID === i}
            onClick={() => setOpenID(i === openID ? null : i)}
        />)}
    </StAccordion>
}
    



export default Accordion