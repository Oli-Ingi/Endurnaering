import { ReactNode } from "react"
import styled, { CSSProperties } from "styled-components"
import { MarginHandler } from "../../../styles/common"


export type Props = {
    as?: "main" | "section" | "article" | "header" | "footer" | "div";
    align?: "center" | "stretch" | "flex-start" | "flex-end";
    just?: "flex-start" | "flex-end" | "center" | "between" | "around" | "stretch";
    self?: "flex-end" | "flex-start";
    z?: number;
    col?: boolean;
    reverse?: boolean;
    $wrap?: boolean;
    pad?: string | number;
    pt?: string | number;
    pr?: string | number;
    pb?: string | number;
    pl?: string | number;
    children: ReactNode;
    width?: string | number | "full";
    style?: CSSProperties;
} & Margins


const Flex =  styled.div<Props>`
    display: flex;
    align-items: ${p => p.align};
    justify-content: ${p => ["between", "around"].includes(p.just) ? `space-${p.just}` : p.just};
    flex-direction: ${p => p.col ? "column" : p.reverse ? "row-reverse" : "row"};
    z-index: ${p => p.z};
    padding: ${p => p.pad};
    width: ${p => p.width === "full" ? "100%" : p.width};
    padding-top: ${p => p.pt};
    padding-right: ${p => p.pr};
    padding-bottom: ${p => p.pb};
    padding-left: ${p => p.pl};
    flex-wrap: ${p => p.$wrap && "wrap"};
    align-self: ${p => p.self};
    ${MarginHandler}
`

export default Flex