import styled from 'styled-components'


type Props = {
    wrap?: boolean;
}

const ListInline = styled.ul<Props>`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap' } ;
    justify-content: center;
    align-items: center;
`


export default ListInline