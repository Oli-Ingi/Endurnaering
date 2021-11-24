import { FC } from "react";
import styled from "styled-components";
import SocialLogo from "../../elements/SocialLogo/SocialLogo";
import { v4 as uuid } from 'uuid'
import Icon from "../../elements/Icon/Icon";


export type Props = {
    logos: Array<{
        src: string;
        to: string;
        alt?: string;
    }>;
}

const StSocialMedia = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5em;

    img {
        margin-left: 0.8em;
    }
`

const SocialMedia: FC<Props> = ({ logos }) =>
    <StSocialMedia>
        <Icon type="facebook" />
        {logos.map(logo => <SocialLogo key={uuid()} {...logo} />)}
    </StSocialMedia>


export default SocialMedia