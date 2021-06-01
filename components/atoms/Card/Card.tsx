import styled, { css } from 'styled-components'

export type Props = {
    margin?: string;
    center?: boolean;
    maxWidth?: number;
    shadow?: boolean;
    bgPrimary?: boolean;
    bgSecondary?: boolean;
}

const Card = styled.section<Props>`
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    flex-grow: 2;
    align-items: ${p => p.center ? 'center' : 'stretch'};
    padding: 1em;
    background-color: ${p => p.bgPrimary 
        ? p.theme.colors.primary  
        : p.bgSecondary
            ? p.theme.colors.secondary
            : 'transparent'
        };
    color: ${p => p.bgPrimary ? p.theme.colors.secondary : p.theme.colors.primary};
    border-radius: 20px;
    z-index: 10;

    ${p => p.shadow && css`box-shadow: 0 0 20px #aaa;`}
    ${p => p.maxWidth && css`max-width: ${p.maxWidth}px;`}
    ${p => p.margin && css`margin: ${p.margin};`}
`


export default Card
