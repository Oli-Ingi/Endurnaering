import { FC } from "react";
import styled from "styled-components";
import { v4 as uuid } from 'uuid'
import Flex from "../../elements/Flex/Flex";
import Icon from "../../elements/Icon/Icon";


export type Props = {
    logos: {
        to: string;
        icon: "facebook" | "instagram" | "linkedIn";
    }[]
}

const StLink = styled.a`
    margin-left: 0.4em;
`

const SocialMedia: FC<Props> = ({ logos }) =>
    <Flex align="center" pad=".5em">
        {logos.map(logo => 
            <StLink href={logo.to} target="_blank" key={logo.to}>
                <Icon key={uuid()} type={logo.icon} />
            </StLink>)}
    </Flex>


export default SocialMedia