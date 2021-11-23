import { FC } from "react"
import styled from "styled-components"
import Icon, { Props as IconProps } from "../../elements/Icon/Icon"
import Text from "../../elements/Text/Text"
import Title from "../../elements/Title/Title"

export type Props = {
    icon?: IconProps["type"];
    title: string;
    iconRight?: boolean;
}

const StDefinition = styled.div<Pick<Props, "iconRight">>`
    display: flex;
    flex-direction: ${p => p.iconRight && "row-reverse"};

    > div {
        flex: 3;
    }

    > svg { 
        margin: ${p => p.iconRight ? "0 0 0 12px" : "0 12px 0 0 "}; 
        flex: 1; 
    }

    h3 { margin: 12px 0 7px 0; }

    p {
        margin-bottom: 6px;
    }

`

const Definition: FC<Props> = ({ icon, title, children, iconRight }) => 
    <StDefinition iconRight={iconRight}>
        <Icon type={icon} />
        <div>
            <Title variant="subsection">{title}</Title>
            <Text size="sm">{children}</Text>
        </div>
    </StDefinition>


export default Definition