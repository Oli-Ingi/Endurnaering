import { FC, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { VariantHandler, addPxIfNumber } from "../../../styles/common";
import { fadeDown } from "../../../styles/keyframes";
import Line from "../../elements/Line/Line";
import Text from "../../elements/Text/Text";
import { v4 as uuid } from 'uuid'
import Title from "../../elements/Title/Title";
import Icon, { Props as IconProps } from '../../elements/Icon/Icon'
import Link from "../../elements/Link/Link";

export type Props = {
    title: string;
    subtitle?: string;
    variant?: Variants; // not sure yet
    content: string[];
    shadow?: boolean; 
    round?: boolean; 
    animate?: boolean;
    width?: string | number;
} & (
    | { onButtonClick: MouseEventHandler<HTMLElement>; buttonCaption: string; buttonIcon?: IconProps["type"] }
    | { onButtonClick?: never; buttonCaption?: never; buttonIcon?: never }
)


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

    h1 {
        margin: 0;

        span {
            display: block;
            font-weight: 300;
            margin-top: 10px;
        }
    }
    
    button {
        margin-top: 30px;
    }
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

const Intro: FC<Props> = ({ title, subtitle, variant, content, animate, onButtonClick, buttonCaption, buttonIcon, ...style }) => 
    <StIntro {...style} variant={variant}>
        <Title variant="huge">{title} {subtitle && <span>{subtitle}</span>}</Title>
        <StLineContainer width={70} margin="1em 0 1.5em 0" center>
            <Line {...animate && { animate, delay: 1 }} variant={variant === "primary" ? "secondary" : "primary"} />
        </StLineContainer>
        <StContent animate={animate} round={style.round}>
            {content.map(p => 
                <Text 
                    key={uuid()} 
                    marginBottom={8} 
                    {...variant === "primary" && { color: "white" }} 
                    center={style.round}
                    size="lg"
                >
                    {p}
                </Text>)}
        </StContent>
        {/* {onButtonClick && buttonCaption && <Link 
            onClick={onButtonClick} 
            variant="primary"
            bold
            icon={buttonIcon && <Icon type={buttonIcon} color="primary" />}
        >
            {buttonCaption}
        </Link>} */}
    </StIntro>


export default Intro


