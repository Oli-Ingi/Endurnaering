import styled, { css } from 'styled-components'
import { fade, fadeRight, fadeType } from '../../../styles/keyframes'



export type Props = {
    margin?: string;
    center?: boolean;
    lg?: boolean;
    huge?: boolean;
    fader?: fadeType;
    fadeDelay?: number;
    line?: boolean;
}


const ArticleHeader = styled.h2<Props>`
    font-size: ${p =>  p.huge ? '4em' : p.lg ? '2.5em' : '2em'};
    margin: ${p => p.margin ? p.margin : '0 0 1em 0'};
    color: ${p => p.theme.colors.primary};
    opacity: ${p => p.fader ? 0 : 1};
    
    ${p => p.fader && css`animation: ${fade(p.fader)} 1s forwards;`}
    animation-delay: ${p => p.fadeDelay || 0.5}s;
    ${p => p.center && css`text-align: center;`}
    ${p => p.line && css`text-decoration: underline;`}

    @media screen and (max-width: 600px) {
        font-size: ${p => p.huge ? '2.5em' : p.lg ? '2em' : '1.5em'};
    }
`


export default ArticleHeader