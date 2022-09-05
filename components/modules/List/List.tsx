import styled from "styled-components";
import { MarginHandler } from "../../../styles/common";



export type Props = Margins & {
    variant?: "bullet" | "empty"; // empty default
    horizontal?: boolean;
}

const List = styled.ul<Props>`
    padding-inline-start: ${p => p.variant === "bullet" && "25px"};
    padding: ${p => p.variant !== "bullet" && 0};
    list-style: ${p => p.variant !== "bullet" && "none"};
    display: flex;
    flex-direction: ${p => !p.horizontal && "column"};
    align-items: ${p => p.horizontal ? "center" : "flex-start"};

    ${MarginHandler}
`



export default List