import styled, { css } from 'styled-components'
import { fadeType, fade } from '../../../styles/keyframes'


export type Props = {
    center?: boolean;
    primary?: boolean;
    secondary?: boolean;
    white?: boolean;
    lg?: boolean;
    bold?: boolean;
    fader?: fadeType;
    fadeDelay?: number;
    margin?: string;
}


const ArticleText = styled.p<Props>`
    font-size: ${p => p.lg ? '1.4em' : '1.2em'};
    margin: ${p => p.margin || '0 0 0.5em 0'};
    color: ${p => p.primary 
        ? p.theme.colors.primary 
        : p.secondary
            ? p.theme.colors.secondary
            : p.white
                ? p.theme.colors.white
                : p.theme.colors.dark};
    opacity: ${p => p.fadeDelay ? 0 : 1};
    
    ${p => p.fader && css`animation: ${fade(p.fader)} 1s forwards;`}
    animation-delay: ${p => p.fadeDelay || 1}s;
    ${p => p.bold && css`font-weight: bold;`}
    ${p => p.center && css`text-align: center;`}
`


export default ArticleText