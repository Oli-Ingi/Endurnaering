import styled from 'styled-components'

export type Props = {
    sm?: boolean;
}


const Subtitle = styled.span<Props>`
    display: block;
    font-weight: 300;
    color: ${p => p.theme.colors.primary};
    font-size: ${p => p.sm && "40px"};  
    margin-top: 12px;
`



export default Subtitle;