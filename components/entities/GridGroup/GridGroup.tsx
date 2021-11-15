import { FC } from 'react'
import styled from 'styled-components'
import Card from '../../modules/Card/Card'

export type Props = {
    items: { title: string; content: string[]; to?: string; }[];
    variant?: Variants;
    border?: boolean;
    shadow?: "always" | "hover";
}

// extract ?
const StGridGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    grid-gap: 3em;
    width: 100%;
    justify-content: center;
`

// TODO: rename, pull this template to templates, use cardGroups.
const GridGroup: FC<Props> = ({ items, variant, border, shadow }) => 
    <StGridGroup>
        {items.map(card => <Card 
            key={card.title}
            content={card.content}
            title={card.title}
            border={border}
            variant={variant || "white"}
            shadow={shadow}
            href={card.to}
        />)}
    </StGridGroup>
    


export default GridGroup