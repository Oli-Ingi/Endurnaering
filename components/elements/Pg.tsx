import styled from "styled-components";


type Props = {
    large?: boolean;
    center?: boolean;
    isGreen?: boolean;
    xl?: boolean;
}

const Pg = styled.p<Props>`
    font-size: ${props => props.xl ? '1.6em' : props.large ? '1.4em' : '1em'};
    font-weight: ${props => props.xl ? 'bold' : 'normal'};
    margin: 5px 0;
    text-align: ${props => props.center ? 'center' : 'start'};
    color: ${props => props.isGreen ? props.theme.colors.green : 'inherit'};
`

export default Pg