import styled from 'styled-components'


export type Props = {
    variant?: "huge" | "page" | "article" | "section" | "subsection";
    $color?: "primary" | "dark";
}

const titleSizeMap = {
    huge: "xxl",
    page: "xl",
    article: "xl",
    section: "l",
    subsection: "m"
}

const Title = styled.h1.attrs<Props>(p => ({
    as: p.variant === "section" ? "h2" 
        : p.variant === "subsection" ? "h3" 
        : "h1",
    variant: p.variant || "article",
    $color: p.$color || "primary"
}))<Props>`
    font-family: ${p => p.theme.fontFamily};
    font-size: ${p => p.theme.font.sizes[titleSizeMap[p.variant]]}px;
    color: ${p => p.theme.colors[p.$color]};
    font-weight: bold;
`

export default Title;