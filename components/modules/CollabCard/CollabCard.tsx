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
    align-items: center;
    justify-content: center;
    border: 1px solid #dedede;
    border-radius: 5px;
    background-color: white;
    filter: grayscale(100%);
    transition-duration: .2s;

    :hover {
        filter: grayscale(0%);
    }

    @media screen and (max-width: 1100px) { filter: none; }

    > img { max-width: 200px; }
`


const CollabCard: FC<Props> = ({ img, alt, href }) =>
    <StCollabCard href={href}>
        <img src={img} alt={alt} />
    </StCollabCard>



export default CollabCard;