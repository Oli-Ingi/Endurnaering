import { FC } from 'react'
import styled from 'styled-components'

export type Props = {
    img: string;
    alt: string;
    href: string;
}


const StCollabCard = styled.a`
    width: 320px;
    height: 150px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border: 1px solid #dedede;
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
    transition-duration: .2s;

    :hover ::before {
        opacity: 1;
    }

    ::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        box-shadow: ${p => p.theme.deepShadow};
        transition-duration: 0.3s;
    }

    > img { max-width: 200px; }
`


const CollabCard: FC<Props> = ({ img, alt, href }) =>
    <StCollabCard href={href}>
        <img src={img} alt={alt} />
    </StCollabCard>



export default CollabCard;