import styled from 'styled-components'


export type Props = {
    src: string;
    alt?: string;
    to: string;
}


const SocialLogo = styled.img<Props>`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    transition-duration: .2s;

    :hover {
        transform: scale(1.05);
    }
`


export default SocialLogo