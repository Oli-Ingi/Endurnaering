import styled, { css } from 'styled-components'


export type BaseProps = {
    secondary?: boolean;
    tertiary?: boolean;
    width?: number;
    lg?: boolean;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;
    bold?: boolean;
}

type BtnProps = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// <Button as="a" ... />
type LinkProps = {
    href: string;
}

export type Props = (BaseProps & BtnProps) | (BaseProps & LinkProps)

const Button = styled.button<Props>`
    transition-duration: 0.2s;
    cursor: pointer;
    border: 1px solid ${p => p.theme.colors.primary};
    border-radius: ${p => p.lg ? '25px' : '15px'};
    display: block;

    background-color: ${p => p.secondary ? p.theme.colors.secondary : p.tertiary ? p.theme.colors.tertiary : p.theme.colors.primary};
    color: ${p => p.tertiary || p.secondary ? p.theme.colors.primary : p.theme.colors.white};
    padding: ${p => p.width && p.lg ? '10px 0' : p.width ? '5px 0' : p.lg ? '10px 1.5em' : '5px 1.5em'};
    font-size: ${props => props.lg ? '1.5em' : '1.1em'};
    margin: ${p => p.margin || '3px 5px'};

    ${p => p.bold && css`font-weight: bold;`}
    ${p => p.width && css`width: ${p.width}px;`}
    ${p => p.marginTop && css`margin-top: ${p.marginTop};`}
    ${p => p.marginRight && css`margin-right: ${p.marginRight};`}
    ${p => p.marginBottom && css`margin-bottom: ${p.marginBottom};`}
    ${p => p.marginLeft && css`margin-left: ${p.marginLeft};`}

    :hover {
        background-color: transparent;
        color: ${p => p.theme.colors.primary};
    }
`

export default Button