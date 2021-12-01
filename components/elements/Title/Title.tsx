import styled from 'styled-components'
import { MarginHandler } from '../../../styles/common';


export type Props = {
    variant?: "huge" | "page" | "article" | "section" | "subsection";
    color?: Colors;
    light?: boolean;
    center?: boolean;
} & Margins

const titleSizeMap = {
    huge: "xxl",
    page: "xl",
    article: "xl",
    section: "l",
    subsection: "m"
}

const mediaSizeMap = {
    huge: "xl",
    page: "l",
    section: "l",
    subsection: "m"
}

type AttrsOut = Omit<Props, "color"> & { $color: NonNullable<Props["color"]> }

const Title = styled.h1.attrs<Props, AttrsOut>(p => ({
    as: p.variant === "section" ? "h2" 
        : p.variant === "subsection" ? "h3" 
        : "h1",
    variant: p.variant || "article",
    $color: p.color || "primary",
    color: undefined
}))<Props>`
    font-family: ${p => p.theme.fontFamily};
    font-size: ${p => p.theme.font.sizes[titleSizeMap[p.variant]]}px;
    color: ${p => p.theme.colors[p.$color]};
    font-weight: ${p => p.light ? 300 : "bold"};
    text-align: ${p => p.center && "center"};
    ${MarginHandler}

    @media (max-width: 700px) {
        font-size: ${p => p.theme.font.sizes[mediaSizeMap[p.variant]]}px;
    }
`

export default Title;