import { FC } from "react"
import styled from "styled-components"
import Icon, { Props as IconProps } from "../../elements/Icon/Icon"
import Text from "../../elements/Text/Text"
import Title from "../../elements/Title/Title"

export type Props = {
    icon?: IconProps["type"];
    title: string;
    iconRight?: boolean;
    color?: Colors;
    justIconColor?: boolean;
}

const StDefinition = styled.div<Pick<Props, "iconRight">>`
    display: flex;
    flex-direction: ${p => p.iconRight && "row-reverse"};

    > div {
        flex: 1;
    }

    > svg { 
        margin: ${p => p.iconRight ? "0 0 0 12px" : "0 12px 0 0 "}; 
    }

    h3 { margin: 12px 0 7px 0; }

    p {
        margin-bottom: 6px;
    }

`

const Definition: FC<Props> = ({ icon, title, children, iconRight, color, justIconColor }) => 
    <StDefinition iconRight={iconRight}>
        <Icon type={icon} color={color || "primary"} />
        <div>
            <Title variant="subsection" color={!justIconColor ? color : undefined}>{title}</Title>
            <Text size="sm" color="dark">{children}</Text>
        </div>
    </StDefinition>


export default Definition