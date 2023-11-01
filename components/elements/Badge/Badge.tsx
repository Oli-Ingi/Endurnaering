import styled from 'styled-components'
import { MarginHandler } from '../../../styles/common';


export type Props = Margins & {
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
    ${MarginHandler}
`





export default Badge;