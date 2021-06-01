import React from 'react'
import styled, { css } from 'styled-components'



export type Props = {
    vertical?: boolean;
    wrap?: boolean;
    stretchItems?: boolean;
}

const StList = styled.ul<Props>`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: ${p => p.vertical ? 'column' : 'row'};

    flex-wrap: ${p => p.wrap ? 'wrap' : 'nowrap'};

    ${p => !p.vertical && css`align-items: stretch;`}
`
const StLi = styled.li<{ vertical?: boolean }>`
    padding: 0;
    margin: 5px;
    display: flex;
    align-items: stretch;
`

const List: React.FC<Props> = ({ vertical, wrap, children }) =>
    <StList vertical={vertical} wrap={wrap}>
        {React.Children.map(children, (c, i) => <StLi key={i}>{c}</StLi>)}
    </StList>


export default List