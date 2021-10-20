import { MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'
import { MarginHandler, VariantHandler } from '../../../styles/common'

export type Props = Margins & {
    variant?: Variants;
    thick?: boolean;
    bold?: boolean;
    newTab?: boolean;
    lined?: boolean;
    border?: boolean;
    noHoverLine?: boolean;
    keepColorOnHover?: boolean;
    size?: "sm" | "lg";
    animatedLine?: boolean;
    
} & (
    | { as: "button"; onClick: MouseEventHandler; to?: never; }
    | { as?: never; onClick?: never; to: string }
)


const Link = styled.a.attrs((p: Props) => ({ 
    ...p.to && { href: p.to },
    ...p.newTab && { target: "__blank" },
    ...p.as === "button" && { as: p.as, onClick: p.onClick }
 }))<Props>`
    cursor: pointer;
    transition-duration: 0.2s;
    display: block;
    font-family: ${p => p.theme.fontFamily};
    font-size: ${p => p.size === "lg" ? 1.6 : p.size === "sm" ? 1 : 1.2}em;
    font-weight: ${p => p.bold ? "bold" : p.thick ? 600 : 300};

    ${p => p.variant ? css`color: ${VariantHandler};` : css`color: black;`}

    ${p => p.border && css`
        border: 1px solid ${VariantHandler};
        border-radius: 25px;
        padding: 7px 1.2em;
    `}
    text-decoration: ${p => p.lined ? 'underline' : 'none'};
    ${MarginHandler}

    ${p => p.animatedLine && css`
        text-decoration: none;
        position: relative;
        display: flex;
        flex-direction: column;

        ::after {
            left: 50%;
            right: 50%;
            bottom: 0;
            content: "";
            margin-top: 5px;
            position: absolute;
            height: 1px;
            background-color: ${p.theme.colors[p.variant === "white" ? "white" : "primary"]};
            transition-duration: 0.3s;
        }
    `}

    :hover {
        text-decoration: ${p => p.border || p.noHoverLine || p.animatedLine ? 'none' : 'underline'};
        ${p => p.border && css`box-shadow:0 0 0 1px ${p => p.theme.colors.primary};`}

        ${p => !p.keepColorOnHover && css`
            color: ${!p.variant ? p.theme.colors.primary : p.theme.colors.tertiary};
        `}
        
        ${p => p.animatedLine && css`
            ::after {
                left: 0;
                right: 0;
            }
        `}
    }
`


export default Link