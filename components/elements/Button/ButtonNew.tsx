import { MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'
import { MarginHandler } from '../../../styles/common'

export type Props = {
    $color?: "primary" | "secondary" | "white";
    variant?: "normal" | "ghost";
    keepColorOnHover?: boolean;
    caption?: string;
} & (
    | { to: string; newTab?: boolean; onClick?: never }
    | { to?: never; newTab?: never; onClick: MouseEventHandler }
) & Margins


const Button = styled.button.attrs((p: Props) => ({ 
    ...p.to && { href: p.to, as: "a" },
    ...p.newTab && { target: "__blank" },
    ...p.caption && { children: p.caption },
    $color: p.$color || "primary",
    variant: p.variant || "normal",
    color: undefined
 }))<Props>`
    cursor: pointer;
    transition-duration: 0.2s;
    border-radius: 20px;
    display: block;
    padding: 10px 50px;
    font-size: ${p => p.theme.font.sizes.s};
    outline: none;
    border: 1px solid ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors[p.$color]};
    color: ${p => p.$color === "secondary" || p.$color === "white" ? p.theme.colors.primary : p.theme.colors.white};
    text-decoration: none;
    white-space: nowrap;
    font-family: ${p => p.theme.fontFamily};
    font-weight: bold;
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

    svg {
        margin-right: 10px;
    }
`

export default Button