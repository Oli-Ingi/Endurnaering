import styled from "styled-components";


export type Props = {
    variant?: "primary" | "secondary";
    spaceLg?: boolean;
    noMargin?: boolean;
}

const BulletList = styled.ul<Props>`
    padding-inline-start: 25px;
    margin: ${p => p.noMargin && 0};
    
    li:first-child {
        margin-top: .3rem;
    }

    li {    
        margin: ${p => p.spaceLg ? 1 : .3}rem;
        color: ${p => p.variant === "secondary" && p.theme.colors.white};

        ::marker {
            color: ${p => p.theme.colors[p.variant || "primary"]};
            font-size: 1.25em;
        }
    }
`



export default BulletList