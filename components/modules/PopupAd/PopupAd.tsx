import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Ls } from '../../../cache/ls'
import { fade, fadeLeft } from '../../../styles/keyframes'
import CloseButton from '../../atoms/CloseButton/CloseButton'
import Overlay from '../../atoms/Overlay/Overlay'


type Props = {
    img: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
    width?: number;
}

const ImgContainer = styled.div<{ width?: number, delay: number }>`
    max-width: 90vw;
    animation: ${fade("in")} 1s forwards;
    opacity: 0;
    animation-delay: ${p => p.delay}s;
    ${p => p.width && css`width: ${p.width}px;`}
    cursor: pointer;
    overflow: hidden;
    position: relative;
`

const StImg = styled.img<{}>`
    width: 100%;
    transition-duration: 0.2s;

    :hover {
        transform: scale(1.02);
    }
`

const setSeen = () => 
    Ls.set("adS", true);

const PopupAd: React.FC<Props> = ({ img, onClick, href, width }) => {
    const isSeen = Ls.get("adS");
    const delay = 10;
    
    return isSeen 
    ? null 
    : <Overlay delay={delay}>
        <ImgContainer width={width} delay={delay}>
            <CloseButton onClick={setSeen} />
            <StImg src={'/sumartilbod.png'} />
        </ImgContainer>
    </Overlay>
}
    

export default PopupAd