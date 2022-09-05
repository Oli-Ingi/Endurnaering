import styled from 'styled-components'


export type Props = {
    color: Colors;
    bold?: boolean;
}


const Badge = styled.div<Props>`
    border: 1px solid ${p => p.theme.colors[p.color]};
    border-radius: 20px;
    font-size: ${p => p.theme.font.sizes.s}px;
    font-family: ${p => p.theme.font.family};
    padding: 4px 1em;
    color: ${p => p.theme.colors[p.color]};
`





export default Badge;