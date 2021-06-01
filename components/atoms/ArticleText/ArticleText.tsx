import styled, { css } from 'styled-components'


export type Props = {
    center?: boolean;
    primary?: boolean;
    secondary?: boolean;
    white?: boolean;
    lg?: boolean;
}


const ArticleText = styled.p<Props>`
    font-size: ${p => p.lg ? '1.4em' : '1.2em'};
    margin: 0 0 0.5em 0;
    color: ${p => p.primary 
        ? p.theme.colors.primary 
        : p.secondary
            ? p.theme.colors.secondary
            : p.white
                ? p.theme.colors.white
                : p.theme.colors.dark};
    
    ${p => p.center && css`text-align: center;`}
`


export default ArticleText