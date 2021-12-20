import { FC } from "react";
import styled from "styled-components";
import { v4 as uuid } from 'uuid'
import Icon from "../../elements/Icon/Icon";


export type Props = {
    logos: {
        to: string;
        icon: "facebook" | "instagram" | "linkedIn";
    }[]
}

const StSocialMedia = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5em;

    a {
        margin-left: 0.4em;
    }
`

const SocialMedia: FC<Props> = ({ logos }) =>
    <StSocialMedia>
        {logos.map(logo => <a href={logo.to}>
            <a href={logo.to} target="_blank"><Icon key={uuid()} type={logo.icon} /></a>
        </a>)}
    </StSocialMedia>


export default SocialMedia