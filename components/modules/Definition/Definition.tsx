import { FC } from "react"
import styled from "styled-components"
import Icon, { Props as IconProps } from "../../elements/Icon/Icon"
import Text from "../../elements/Text/Text"
import Title from "../../elements/Title/Title"

export type Props = {
    icon?: IconProps["type"];
    title: string;
    subtitle?: string;
    iconRight?: boolean;
    color?: Colors;
    justIconColor?: boolean;
    border?: boolean;
}

const StDefinition = styled.div<{ iconRight?: boolean; $color: Colors; border?: boolean }>`
    display: flex;
    flex-direction: ${p => p.iconRight && "row-reverse"};
    border-top: ${p => p.border && `2px solid ${p.theme.colors[p.$color || "primary"]}`};
    padding-top: 10px;

    

    svg { 
        margin: ${p => p.iconRight ? "0 0 0 12px" : "0 12px 0 0 "}; 
    }

    h3 { 
        margin: 12px 0 7px 0; 

        > span { font-weight: 300; display: block; }
    }

    p {
        margin-bottom: 6px;
    }

`

const StIconBox = styled.div`
    margin-right: 6px;
`

const Definition: FC<Props> = ({ icon, title, children, iconRight, color, justIconColor, border, subtitle }) => 
    <StDefinition iconRight={iconRight} $color={color || "primary"} border={border}>
        <StIconBox><Icon type={icon} color={color || "primary"} /></StIconBox>
        <div>
            <Title variant="subsection" color={!justIconColor ? color : undefined}>{title}{subtitle && <span>{subtitle}</span>}</Title>
            <Text size="sm" color="dark">{children}</Text>
        </div>
    </StDefinition>


export default Definition