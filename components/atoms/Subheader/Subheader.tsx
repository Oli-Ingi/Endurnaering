import styled, { css } from 'styled-components'

export type Props = {
    margin?: string;
    center?: boolean;
    lg?: boolean;
}


const Subheader = styled.h3<Props>`
    font-size: ${p => p.lg ? '1.7em' : '1.5em'};
    color: ${p => p.theme.colors.primary};

    margin: ${p => p.margin ? p.margin : '0 0 1em 0'};
    
    ${p => p.center && css`text-align: center;`}
`

export default Subheader