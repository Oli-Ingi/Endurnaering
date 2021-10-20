import { FC, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { VariantHandler } from "../../../styles/common";


export type Props = {
    length?: number;
    variant?: Variants;
    right?: boolean;
    onClick: MouseEventHandler;
}

const defaultLength = 70;

const StButton = styled.button<Pick<Props, "onClick" | "length" | "right">>`
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    outline: none;
    width: ${p => (p.length || defaultLength) + 15}px;
    display: flex;
    justify-content: ${p => p.right ? "flex-start" : "flex-end"};

    :hover svg {
        width: ${p => (p.length || defaultLength) + 15}px;
    }
`

const StArrow = styled.svg<Omit<Props, "onClick">>`
    height: 20px;
    width: ${p => p.length || defaultLength}px;
    transition: width 0.3s ease-out;

    ${p => p.right && css`
        transform: rotate(180deg);
    `}

    line {
        stroke: ${VariantHandler};
    }
`


const Arrow: FC<Props> = ({ length, onClick, ...rest }) => 
    <StButton length={length} onClick={onClick} right={rest.right}>
        <StArrow xmlns="http://www.w3.org/2000/svg" length={length} {...rest}>
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2={(length || defaultLength) + 15} y1="10" y2="10" />
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="10" y1="10" y2="20" />
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="10" y1="10" y2="0" />
        </StArrow>
    </StButton>



export default Arrow