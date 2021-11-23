import { ReactNode } from "react"
import styled from "styled-components"
import { MarginHandler } from "../../../styles/common"


export type Props = {
    as?: "main" | "section" | "article" | "header" | "footer";
    align?: "center" | "stretch" | "flex-start" | "flex-end";
    just?: "flex-start" | "flex-end" | "center" | "between" | "around" | "stretch";
    z?: number;
    pad?: string | number;
    pt?: string | number;
    pr?: string | number;
    pb?: string | number;
    pl?: string | number;
    children: ReactNode;
    width?: string | number | "full";
} & Margins


const Flex =  styled.div<Props>`
    display: flex;
    align-items: ${p => p.align};
    justify-content: ${p => ["between", "around"].includes(p.just) ? `space-${p.just}` : p.just};
    z-index: ${p => p.z};
    padding: ${p => p.pad};
    width: ${p => p.width === "full" ? "100%" : p.width};
    padding-top: ${p => p.pt};
    padding-right: ${p => p.pr};
    padding-bottom: ${p => p.pb};
    padding-left: ${p => p.pl};
    ${MarginHandler}
`

export default Flex