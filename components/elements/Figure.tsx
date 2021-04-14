import styled from "styled-components";


type Props = {
    cols?: string | number;
    center?: boolean;
    end?: boolean;
    margin?: boolean;
    mediaMarginTop?: boolean;
    mediaCols?: string;
    mediaCenter?: boolean;
    pointer?: boolean;
}

const Figure = styled.figure<Props>`
    grid-column: ${props => props.cols || 2};
    justify-self: ${props => props.center
        ? 'center' 
        : props.end 
            ? 'end'
            : 'start' };
    cursor: ${props => props.pointer ? 'pointer' : 'default'};
    margin: ${props => props.margin ? '1em' : 0};
    transition-duration: 0.2s;

    :hover {
        transform: scale(1.1);
    }

    @media (max-width: 730px) {
        grid-column: ${props => props.mediaCols || props.cols || 2};
        margin-top: ${props => props.mediaMarginTop ? '3em' : props.margin ? '1em' : 0};
        ${props => props.mediaCenter && 'justify-self: center;'}
    }
`

export default Figure