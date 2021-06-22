import styled, { css } from 'styled-components'
import { fade, fadeType } from '../../../styles/keyframes'

export type Props = {
    margin?: string;
    center?: boolean;
    lg?: boolean;
    fader?: fadeType;
    fadeDelay?: number;
}


const Subheader = styled.h3<Props>`
    font-size: ${p => p.lg ? '3.2em' : '2em'};
    color: ${p => p.theme.colors.primary};
    margin: ${p => p.margin ? p.margin : '0 0 1em 0'};
    opacity: ${p => p.fadeDelay ? 0 : 1};
    
    ${p => p.fader && css`animation: ${fade(p.fader)} 1s forwards;`}
    animation-delay: ${p => p.fadeDelay || 1}s;
    ${p => p.center && css`text-align: center;`}

    @media screen and (max-width: 600px) {
        font-size: ${p => p.lg ? '2.2em' : '1.3em'};
    }
`

export default Subheader