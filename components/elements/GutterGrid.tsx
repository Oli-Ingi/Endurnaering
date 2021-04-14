import styled from 'styled-components'

interface Props {
    full?: boolean;
}

const GutterGrid = styled.div<Props>`
    width: 100%;
    display: grid;
    grid-template-columns: minmax(1em, 1fr) minmax(0, 80em) minmax(1em, 1fr);
    background-color: ${props => props.theme.colors.white};
    grid-column: ${props => props.full ? '1/4' : 1};
`

export default GutterGrid;