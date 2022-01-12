import { FC, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { MarginHandler, VariantHandler } from "../../../styles/common";


export type Props = {
    length?: number;
    variant?: Variants;
    right?: boolean;
    onClick: MouseEventHandler;
} & Margins

const defaultLength = 70;

const StButton = styled.button<Omit<Props, "variant">>`
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    outline: none;
    width: ${p => (p.length || defaultLength) + 10}px;
    display: flex;
    justify-content: ${p => p.right ? "flex-start" : "flex-end"};
    ${MarginHandler}

    :hover svg {
        width: ${p => (p.length || defaultLength) + 10}px;
        
        line {
            stroke-width: 2px;
        }
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
        transition-duration: 0.3s;
    }
`


const Arrow: FC<Props> = ({ length, onClick, right, variant, ...margins }) => 
    <StButton length={length} onClick={onClick} right={right} {...margins}>
        <StArrow xmlns="http://www.w3.org/2000/svg" length={length} variant={variant} right={right}>
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2={(length || defaultLength) + 10} y1="10" y2="10" />
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="10" y1="10" y2="20" />
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="10" y1="10" y2="0" />
        </StArrow>
    </StButton>



export default Arrow