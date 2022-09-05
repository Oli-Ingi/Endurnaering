import { FC } from 'react'
import styled from "styled-components"
import { MarginHandler } from "../../../styles/common";
import Icon from '../Icon/Icon';

export type Props = Margins & {
    variant?: "info" | "warning" | "error";
}


const StInfoBox = styled.div<Props>`
    border: 1px solid ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.blueLight};
    padding: 28px 46px 18px;
    position: relative;
    border-radius: 5px;
    ${MarginHandler}

    svg {
        position: absolute;
        left: 10px;
        top: 10px;

        path:last-child {
            fill: ${p => p.theme.colors.blue};
        }
    }
`


const InfoBox: FC<Props> = ({ variant, children, ...margins }) =>
    <StInfoBox variant={variant} {...margins}>
        <Icon type="info" />
        {children}
    </StInfoBox>

export default InfoBox;

