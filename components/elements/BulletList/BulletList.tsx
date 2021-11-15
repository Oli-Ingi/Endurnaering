import styled from "styled-components";


export type Props = {
    variant?: "primary" | "secondary";
}

const BulletList = styled.ul<Props>`
    padding-inline-start: 25px;
    
    li {
        margin: 0.3rem;
        color: ${p => p.variant === "secondary" && p.theme.colors.white};

        ::marker {
            color: ${p => p.theme.colors[p.variant || "primary"]};
            font-size: 1.25em;
        }
    }
`



export default BulletList