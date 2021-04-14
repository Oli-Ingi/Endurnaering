import styled, { css } from 'styled-components'


type Props = {
    selfCenter?: boolean;
    center?: boolean;
    mediaCenter?: boolean;
    col?: number;
    mediaCol?: string;
    mediaFirst?: boolean;
}

const Article = styled.article<Props>`
    grid-column: ${props => props.col || 2};
    justify-self: ${props => props.selfCenter ? 'center' : 'start'};
    display: flex;
    flex-direction: column;
    z-index: 2;
    padding: 1em;
    font-size: 1.4em;
    align-items: ${props => props.center ? 'center' : 'flex-start'};

    @media (max-width: 730px) {
        align-items: ${props => props.mediaCenter ? 'center' : 'flex-start'};
        grid-column: ${props => props.mediaCol ? props.mediaCol : props.col || 2};
        grid-row: ${props => props.mediaFirst ? 1 : 'auto'};
    }

`

export default Article