import styled from 'styled-components'

interface Props {
    invert?: boolean;
    large?: boolean;
    shadow?: boolean;
}

const Button = styled.button<Props>`
    padding: ${props => props.large ? '10px 2em' : '5px 2em'};
    margin: 0.3em;
    border-radius: 30px;
    box-shadow: ${props => props.shadow ? '2px 8px 20px #666' : 'none'};
    border: 1px solid ${props => props.theme.colors.green};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${props => props.invert 
        ? props.theme.colors.gray
        : props.theme.colors.green};
    color: ${props => props.invert
        ? props.theme.colors.green
        : props.theme.colors.white};
    font-size: ${props => props.large ? '1.5' : '1.2'}em;
    transition-duration: 0.2s;
    position: relative;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.green};
        /* background-color: ${props => props.invert 
            ? props.theme.colors.white
            : props.theme.colors.gray};
        color: ${props => props.invert
            ? props.theme.colors.green
            : props.theme.colors.green}; */
    }
`



export default Button