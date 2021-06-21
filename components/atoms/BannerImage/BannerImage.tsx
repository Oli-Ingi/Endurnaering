import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import { fade, fadeRight, fadeType } from '../../../styles/keyframes'


export type Props = {
    src: string;
    margin?: string;
    fadeRight?: boolean;
    fadeDelay?: number;
    fader?: fadeType;
}

const StContainer = styled.div<{ margin?: string, fader?: fadeType; fadeDelay?: number; }>`
    margin: ${p => p.margin || '1em'};
    flex-basis: 550px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    opacity: ${p => p.fadeDelay ? 0 : 1};
    
    ${p => p.fader && css`animation: ${fade(p.fader)} 1s forwards;`}
    animation-delay: ${p => p.fadeDelay || 1}s;

`

const BannerImage: React.FC<Props> = ({ src, margin, fader, fadeDelay }) => 
    <StContainer margin={margin} fadeDelay={fadeDelay} fader={fader}>
        <Image src={src} alt='aðalmynd' width={764} height={775} />
    </StContainer>


export default BannerImage