import styled from 'styled-components'


type Props = {
    isGray?: boolean;
    isWhite?: boolean;
    center?: boolean;
}

const Header3 = styled.h3<Props>`
    font-size: 1.6em;
    margin: 0 0 0.5em 0;
    color: ${({ isGray, isWhite, theme }) => isGray 
        ? theme.colors.gray
        : isWhite 
            ? theme.colors.white
            : theme.colors.green};
    text-align: ${props => props.center ? 'center' : 'start'};
`

const Header2 = styled(Header3)`
    font-size: 1.8em;
`

export { Header3, Header2 }