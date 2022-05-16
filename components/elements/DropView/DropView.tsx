import styled, { css } from 'styled-components'



export type Props = {
    isOpen: boolean;
    $height: number;
    absolute?: boolean;
}


const DropView = styled.div<Props>`
    height: ${p => p.isOpen ? p.$height : 0}px;
    overflow: hidden;
    transition: height 0.3s cubic-bezier(0.9,.05,.2,1);
    margin-left: ${p => !p.absolute && "40px"};
    
    ${p => p.absolute && css`
        position: absolute;
        top: 188%;
        z-index: 3;
    `}
`


export default DropView