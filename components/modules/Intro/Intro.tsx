import { FC } from "react";
import styled, { css } from "styled-components";
import { VariantHandler, addPxIfNumber } from "../../../styles/common";
import { fadeDown } from "../../../styles/keyframes";
import Line from "../../elements/Line/Line";
import Text from "../../elements/Text/Text";
import { v4 as uuid } from 'uuid'

export type Props = {
    title: string;
    variant?: Variants; // not sure yet
    content: string[];
    shadow?: boolean; 
    round?: boolean; 
    animate?: boolean;
    width?: string | number;
}


const StIntro = styled.div<Pick<Props, "shadow" | "round" | "variant" | "width">>`
    padding: 1em;
    max-width: 100%;
    border-radius: 5px;
    ${p => p.width && !p.round && css`width: ${addPxIfNumber(p.width)};`}
    ${p => p.shadow && css`box-shadow: ${p.theme.shadow};`}
    ${p => p.round && css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: ${p.width ? addPxIfNumber(p.width) : "350px"};
        height: ${p.width ? addPxIfNumber(p.width) : "350px"};
    `}
    ${p => p.variant && css`background-color: ${VariantHandler};`}
`

const StLineContainer = styled.div<{ width?: number, margin?: string, center?: boolean }>`
    position: relative;
    margin: ${p => p.margin || "5px 0"};
    width: ${p => p.width || 100}%;
    ${p => p.center && css`display: flex;`}
`

const StContent = styled.div<Pick<Props, "animate" | "round">>`
    ${p => p.round && css`padding: 0.5em 1em;`}
    ${p => p.animate && css`
        opacity: 0;
        animation: ${fadeDown} 1s forwards;
        animation-delay: 1.5s;
    `}
`

const Intro: FC<Props> = ({ title, variant, content, animate, ...style }) => 
    <StIntro {...style} variant={variant}>
        <Text as="h2" thick size="xxl" variant={variant === "primary" ? "white" : "primary"}  {...animate && { fade: "in", delay: 0.3 }}>{title}</Text>
        <StLineContainer width={70} margin="1em 0" center>
            <Line {...animate && { animate, delay: 1 }} variant={variant === "primary" ? "secondary" : "primary"} />
        </StLineContainer>
        <StContent animate={animate} round={style.round}>
            {content.map(p => 
                <Text key={uuid()} marginBottom={8} {...variant === "primary" && { variant: "white" }} center={style.round}>{p}</Text>)}
        </StContent>
    </StIntro>


export default Intro


