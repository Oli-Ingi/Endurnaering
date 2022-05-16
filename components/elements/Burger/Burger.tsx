import styled, { css } from 'styled-components'
import { FC, MouseEvent} from  'react'


export type Props = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    isOpen: boolean;
    variant?: "primary" | "white";
    scale?: number;
}


const StBurger = styled.button<Props>`
    cursor: pointer;
    border: 0;
    outline: 0;
    display: flex;
    background: none;
    box-sizing: border-box;
    padding: 0 1.5em;

    svg {
        height: 18px;
        width: 30px;
        ${p => p.scale && css`transform: scale(${p.scale});`}
    }

    line {
        transition: all 0.3s ease-in-out;
        stroke: ${p => p.theme.colors[p.variant || "primary"]};
        stroke-width: 2px;
        opacity: 1;

        :first-child {
            transform-origin: 50% 0;
            transform: ${p => p.isOpen ? "translateY(8px) rotate(45deg)" : "translateY(0px) rotate(0deg)"};
        }

        :nth-child(2) {
            opacity: ${p => p.isOpen ? 0 : 1};
        }

        :last-child {
            transform-origin: 50% 100%;
            transform: ${p => p.isOpen ? "translateY(-8px) rotate(-45deg)" : "translateY(0px) rotate(0deg)"};
        }
    }
`


const Burger: FC<Props> = props => 
    <StBurger className="burger" {...props}>
        <svg  xmlns="http://www.w3.org/2000/svg">
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="30" y1="1" y2="1" />
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="30" y1="9" y2="9" />
            <line strokeLinecap="butt" strokeLinejoin="round" x1="0" x2="30" y1="17" y2="17" />
        </svg>
    </StBurger>

    



export default Burger