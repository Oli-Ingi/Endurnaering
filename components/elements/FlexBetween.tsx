import styled, { css } from 'styled-components'

interface Props {
    col?: string;
    mediaPoint?: number;
}

const FlexBetween = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    grid-column: ${props => props.col || 'auto'};

    @media (max-width: ${props => props.mediaPoint}px) {
        justify-content: center;
    }
    /* ${props => props.mediaPoint && css`
        @media screen (max-width: 750px) {
            justify-content: center;
        }
    `} */
`

export default FlexBetween