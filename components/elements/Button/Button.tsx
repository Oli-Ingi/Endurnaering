import { MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'
import { MarginHandler } from '../../../styles/common'

export type Props = {
    color?: Variants;
    variant?: "normal" | "ghost";
    keepColorOnHover?: boolean;
    caption?: string;
} & (
    | { to: string; newTab?: boolean; onClick?: never }
    | { to?: never; newTab?: never; onClick: MouseEventHandler }
) & (
    | { lg?: boolean; sm?: never }
    | {lg?: never; sm?: boolean }
) & Margins


const Button = styled.button.attrs((p: Props) => ({ 
    ...p.to && { href: p.to, as: "a" },
    ...p.newTab && { target: "__blank" },
    ...p.caption && { children: p.caption },
    color: p.color || "primary",
    variant: p.variant || "normal"
 }))<Props>`
    cursor: pointer;
    transition-duration: 0.2s;
    border-radius: ${p => p.lg ? '25px' : '15px'};
    display: block;
    padding: ${p => p.lg ? 7 : p.sm ? 3 : 7}px 1.6em;
    font-size: ${p => p.lg ? '1.3em' : '1em'};
    outline: none;
    border: 1px solid ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors[p.color]};
    color: ${p => p.color === "secondary" || p.color === "white" ? p.theme.colors.primary : p.theme.colors.white};
    text-decoration: none;
    white-space: nowrap;
    font-family: ${p => p.theme.fontFamily};
    font-weight: 500;
    ${MarginHandler}

    :hover {
        ${p => p.variant === "ghost" 
        ? css`
            box-shadow: 0 0 0 1pt ${p.theme.colors.primary};
        ` 
        : css`
            background-color: transparent;
            ${!p.keepColorOnHover && css`
                color: ${p.theme.colors[p.color === "primary" ? "primary" : "white"]};
            `}
        `}
        
        
    }
`

export default Button