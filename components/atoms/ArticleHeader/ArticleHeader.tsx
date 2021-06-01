import styled, { css } from 'styled-components'


export type Props = {
    margin?: string;
    center?: boolean;
    lg?: boolean;
}


const ArticleHeader = styled.h2<Props>`
    font-size: ${p => p.lg ? '2.2em' : '1.6em'};
    margin: ${p => p.margin ? p.margin : '0 0 1em 0'};

    ${p => p.center && css`text-align: center;`}
`


export default ArticleHeader