import { FC, MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'
import { MarginHandler, VariantHandler } from '../../../styles/common'

export type Props = Margins & {
    variant?: Variants;
    bold?: boolean;
    permaLine?: boolean;
    inline?: boolean;
    icon?: JSX.Element;
    iconRight?: boolean;
    noHoverLine?: boolean;
    keepColorOnHover?: boolean;
    size?: "sm" | "lg";
    children: string;
} & (
    | { onClick: MouseEventHandler<HTMLElement>; to?: never; newTab?: never; }
    | { onClick?: never; to: string; newTab?: boolean; }
) & (
    | { icon: JSX.Element; iconRight?: boolean }
    | { icon?: never; iconRight?: never }
)


const StLink = styled.a.attrs<Omit<Props, "children" | "icon">>(p => ({ 
    ...p.to && { href: p.to },
    ...p.newTab && { target: "__blank" },
    ...Boolean(p.onClick) && { as: "button" }
 }))<Omit<Props, "children" | "icon">>`
    cursor: pointer;
    transition-duration: 0.2s;
    display: ${p => p.inline ? 'inline-flex' : 'flex'};
    flex-direction: ${p => p.iconRight && "row-reverse"};
    align-items: center;
    font-family: ${p => p.theme.fontFamily};
    font-size: ${p => p.size === "lg" ? 1.6 : p.size === "sm" ? 1 : 1.2}rem;
    font-weight: ${p => p.bold ? "bold" : 300};
    text-decoration: none;
    ${MarginHandler}

    ${p => p.onClick && css`
        background: none;
        border: none;
    `}

    > span {
        transition-duration: .2s;
        ${p => p.variant ? css`color: ${VariantHandler};` : css`color: black;`}
        text-decoration: ${p => p.permaLine ? 'underline' : 'none'};
        display: block;

        ${p => !p.permaLine && css`
            text-decoration: none;
            position: relative;
            display: ${p.inline ? 'inline-flex' : 'flex'};
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
    }

    :hover > span {
        color: ${p => p.theme.colors.primary};

        ${p => (!p.permaLine && !p.noHoverLine) && css`
            ::after {
                left: 0;
                right: 0;
            }
        `}
    } 

    svg {
        margin: ${p => p.iconRight ? "0 0 0 8px" : "0 8px 0 0"};
    }
`


const Link: FC<Props> = ({ icon, children, ...link }) => 
    <StLink {...link}>
        {icon}
        <span>{children}</span>
    </StLink>


export default Link